check_clone_repo() {
	local repo=$1
	if [[ ! -d "$repo" ]]; then
		git clone --depth 1 https://github.com/spdk/spdk $repo
	fi
}

remove_repo() {
	local repo=$1
	rm -rf "$repo"
}

regenerate_docs() {
	local repo=$1
	local rootdir="$repo/.."
	doc_header_dir="$rootdir/doc_header"
	rm -rf $doc_header_dir

	mkdir -p "$doc_header_dir/_layouts"

	# _includes/header.html contains jekyll directives for marking menu entries as active.
	# If we want to have headers to show "DOCUMENTATION" entry as active, we need to have
	# a 'doc.md' file, which will result in jekyll generating 'doc' directory and match
	# with box URL.
	echo "---
layout: doc
title: Storage Performance Development Kit
---" > "$doc_header_dir/doc.md"

	cp "$rootdir/_layouts/doc.html" "$doc_header_dir/_layouts"
	cp -R "$rootdir/_includes" "$doc_header_dir/_includes"
	cp "$rootdir/_config.yml" "$doc_header_dir"
	# Use Jekyll to generate a header for docs using _config.yml
	(cd "$doc_header_dir"; jekyll build)

	# Clean empty and blank lines
	sed -ri '/^\s*$/d' "$doc_header_dir/_site/doc/index.html"

	# Overwrite header and footer with the spdk.io versions
	cp "$doc_header_dir/_site/doc/index.html" "$repo/doc/header.html"
	cp "$rootdir/_doc_footer.html" "$repo/doc/footer.html"
	cp "$rootdir/css/spdk.css" "$repo/doc/spdk.css"
	sed -i 's/^HTML_EXTRA_STYLESHEET.*/HTML_EXTRA_STYLESHEET  = spdk.css/' "$repo/doc/Doxyfile"

	(cd "$repo/doc"; make clean; make)
	cp "$rootdir/js/navtree.js" "$repo/doc/output/html"
	cp "$rootdir/css/navtree.css" "$repo/doc/output/html"

	rm -rf $rootdir/doc/*
	rm -r $doc_header_dir
	cp -R $repo/doc/output/html/* $rootdir/doc
}