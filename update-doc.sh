#!/usr/bin/env bash

set -e

cd $(dirname $0)

repo=$(dirname $0)/spdk

git clone --depth 1 http://github.com/spdk/spdk $repo
cd spdk
git fetch https://review.gerrithub.io/spdk/spdk refs/changes/03/391603/2 && git checkout FETCH_HEAD
cd ..

# Overwrite header and footer with the spdk.io versions
cp _doc_header.html $repo/doc/header.html
cp _doc_footer.html $repo/doc/footer.html
cp _doc_stylesheet.css $repo/doc/stylesheet.css

# Disable Doxygen header bar (clashes with spdk.io layout)
sed -i -e 's/^DISABLE_INDEX.*=.*$/DISABLE_INDEX = YES/' $repo/doc/Doxyfile

(cd $repo/doc; make clean; make)
git rm -rf doc
cp -R $repo/doc/output/html doc
git add doc
rm -rf $repo

echo
echo "New docs generated"
echo
git status
