#!/usr/bin/env bash

set -e
rc=0

function help() {
	cat <<- HELP
		Usage: ${0##*/} [-e exclude]
			-h           - show this help
			-e           - comma-separated list of paths to exclude from git ls-files
			               or git grep
	HELP
}

trap 'cleanup' EXIT

function cleanup() {
	files_to_delete=(
		eofnl.log
		commit_message.txt
	)

	rm -f "${files_to_delete[@]}"
}

function verify_installed_tool() {
	if ! hash "$1" &>/dev/null; then
		echo "WARNING: please install $1!" >&2
	fi
}

function git_ls_files() {
	git ls-files "${EXCLUDED_PATHS[@]}" "$@"
}

function git_grep() {
	git grep "$@" "${EXCLUDED_PATHS[@]}"
}

function get_exclude_args() {
	IFS=',' read -ra EXCLUDES <<< "$1"
	for path in "${EXCLUDES[@]}"; do
		EXCLUDED_PATHS+=(":!$path")
	done
}

function check_eof() {
	local rc=0
	echo -n "Checking blank lines at end of file... "

	if ! git_grep -I -l -z -e . -- './*' ':!./**/*.min.*' ':!./**/*.svg' | \
		xargs -0 -P0 -n1 "$BASEDIR/scripts/eofnl" > eofnl.log; then
		echo "Incorrect end-of-file formatting detected"
		cat eofnl.log
		rc=1
	else
		echo "OK"
	fi

	return $rc
}

function check_shellcheck() {
	local exclude_directives=() bash_files=() shellcheck_opts=() out

	echo -n "Checking Bash scripts... "
	if ! verify_installed_tool shellcheck; then
		return 1
	fi

	mapfile -t bash_files < <(git_grep -lE '^#!(/bin/(ash|bash|sh)|/usr/bin/env bash)' | grep -vE ".yaml")

	if ((${#bash_files[@]} == 0)); then
		echo "No Bash files to check"
		return 0
	fi

	# Keep this list at the very minimum
	exclude_directives+=("SC1090") # Can't follow non-constant source. Use a directive to specify location
	exclude_directives+=("SC2154") # Variable is referenced but not assigned - common while source'ing
	exclude_directives+=("SC2164") # Use 'cd ... || exit' or 'cd ... || return' in case cd fails
	exclude_directives+=("SC2206") # Quote to prevent word splitting/globbing, or split robustly with mapfile or read - depends on use-case
	exclude_directives+=("SC2207") # Prefer mapfile or read -a to split command output (or quote to avoid splitting) - depends on use-case

	local IFS=","

	shellcheck_opts+=("-x" "-fgcc" "-S" "warning" "-s" "bash")
	if ((${#exclude_directives[@]} > 0)); then
		shellcheck_opts+=("-e" "${exclude_directives[*]}")
	fi

	if out=$(printf '%s\n' "${bash_files[@]}" | xargs -P0 -n1 shellcheck "${shellcheck_opts[@]}" 2>&1); then
		echo "OK"
		return 0
	fi
	echo "NOT OK"
	echo -e "\n$out\n"
	return 1
}


function check_misspell() {
	local out files=() suffixes=() ignore=""

	echo -n "Checking files for common misspelling... "
	if ! verify_installed_tool codespell; then
		return 1
	fi

	# Build a list of files that we want to check.
	suffixes+=('*.config')
	suffixes+=('*.html')
	suffixes+=('*.md')
	suffixes+=('*.sh')
	suffixes+=('*.txt')
	suffixes+=('*.yml')
	suffixes+=('*.yaml')

	# Check also commit message environment
	git log --format=%B -n1 > commit_message.txt
	files+=(commit_message.txt)

	ignore+=".*codespell-ignore.*"

	files+=($(git_ls_files "${suffixes[@]}"))

	if out=$(codespell --builtin clear,informal,rare -s "${files[@]}" --ignore-regex "$ignore" 2>&1); then
		echo "OK"
		return 0
	fi

	echo "NOT OK"
	echo -e "\n$out\n"
	return 1
}


function check_yaml_style() {
	local yamls out

	echo -n "Checking YAML style... "
	if ! verify_installed_tool yamllint; then
		return 1
	fi

	mapfile -t yamls < <(git_ls_files '*.yaml' '*.yml' '*yamllint.config')

	if ((${#yamls[@]} == 0)); then
		echo "No yaml files to check"
		return 0
	fi

	if ! out=$(yamllint -c $BASEDIR/scripts/yamllint.config --no-warnings "${yamls[@]}" 2>/dev/null); then
		echo "NOT OK"
		echo -e "\n$out"
		return 1
	fi

	echo "OK"

	return 0
}

BASEDIR=$(readlink -f "$(dirname "$0")")/..
EXCLUDED_PATHS=()

while getopts ":p:se:h" opt; do
	case $opt in
		h) help; exit 0 ;;
		e) get_exclude_args $OPTARG ;;
		:) echo "Option -$OPTARG requires an argument."; exit 1 ;;
		*) echo "Invalid option: -$OPTARG"; help; exit 1 ;;
	esac
done

cd $BASEDIR

check_eof || rc=1
check_shellcheck || rc=1
check_misspell || rc=1
check_yaml_style || rc=1

exit $rc
