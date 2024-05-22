repo=$(dirname $0)/spdk

check_clone_repo() {
	if [[ ! -d "$repo" ]]; then
		git clone --depth 1 https://github.com/spdk/spdk $repo
	fi
}

remove_repo() {
	rm -rf $repo
}

regenerate_docs() {
	# Overwrite header and footer with the spdk.io versions
	cp _doc_header.html $repo/doc/header.html
	cp _doc_footer.html $repo/doc/footer.html
	cp css/spdk.css $repo/doc/spdk.css
	sed -i 's/^HTML_EXTRA_STYLESHEET.*/HTML_EXTRA_STYLESHEET  = spdk.css/' $repo/doc/Doxyfile

	(cd $repo/doc; make clean; make)
	cp js/navtree.js $repo/doc/output/html
	cp css/navtree.css $repo/doc/output/html

	rm -rf doc/*
	cp -R $repo/doc/output/html/* doc
}
