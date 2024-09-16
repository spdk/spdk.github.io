#!/usr/bin/env bash

set -ex

rootdir=$(readlink -f "$(dirname $0)")
repo="$rootdir/spdk"
dst="$rootdir/_site"
source "$rootdir/common.sh"

check_clone_repo "$repo"
regenerate_docs "$repo"
remove_repo "$repo"

jekyll build --source "$rootdir" --destination "$dst"
