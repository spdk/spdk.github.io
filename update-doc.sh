#!/usr/bin/env bash

set -e

cd $(dirname $0)

repo=$(dirname $0)/spdk

git clone --depth 1 http://github.com/spdk/spdk $repo

# Overwrite header and footer with the spdk.io versions
cp _doc_header.html $repo/doc/header.html
cp _doc_footer.html $repo/doc/footer.html
cp _doc_stylesheet.css $repo/doc/stylesheet.css

(cd $repo/doc; make clean; make)
git rm -rf doc
cp -R $repo/doc/output/html doc
git add doc
rm -rf $repo

echo
echo "New docs generated"
echo
git status
