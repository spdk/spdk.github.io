#!/usr/bin/env bash

set -x
set -e

cd $(dirname $0)
repo=$(dirname $0)/spdk

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

if [ ! -d "$repo" ]; then
        git clone --depth 1 https://github.com/spdk/spdk $repo
fi

doc_version=$(cd $repo; git rev-parse HEAD)

(cd $repo; git submodule update --init; ./configure)
# Overwrite header and footer with the spdk.io versions
cp _doc_header.html $repo/doc/header.html
cp _doc_footer.html $repo/doc/footer.html
cp css/spdk.css $repo/doc/spdk.css
sed -i 's/^HTML_EXTRA_STYLESHEET.*/HTML_EXTRA_STYLESHEET  = spdk.css/' $repo/doc/Doxyfile

(cd $repo/doc; make clean; make)
cp js/navtree.js $repo/doc/output/html
cp css/navtree.css $repo/doc/output/html

rm -rf doc
cp -R $repo/doc/output/html doc
if [ "$TEST_MODE" -eq 0 ]; then
        git add doc
        rm -rf $repo
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
