#!/usr/bin/env bash

set -x
set -e

cd $(dirname $0)
rootdir=$(readlink -f $(dirname $0))
source $rootdir/common.sh

TEST_MODE=0

for i in "$@"; do
	case "$i" in
		--test)
			TEST_MODE=1
			;;
	esac
done

if [ -d "$repo" ]; then
	if [ "$TEST_MODE" -eq 1 ]; then
		(cd $repo; git clean -x -d -f -f; git checkout master)
	else
		rm -rf $repo
	fi
fi

check_clone_repo

doc_version=$(cd $repo; git rev-parse HEAD)

regenerate_docs

if [ "$TEST_MODE" -eq 0 ]; then
	git add doc
	remove_repo
fi

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
	echo "$doc_version" > _doc_version.txt
	git add _doc_version.txt

	echo
	echo "New docs generated"
	echo
	git status
else
	exit 0
fi
