#!/usr/bin/env bash

set -e

cd $(dirname $0)

repo=$(dirname $0)/spdk

git clone http://github.com/spdk/spdk $repo
(cd $repo/doc; make clean; make)
git rm -rf doc
cp -R $repo/doc/output/html doc
git add doc
rm -rf $repo

echo
echo "New docs generated"
echo
git status
