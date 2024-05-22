#!/usr/bin/env bash

set -ex

src=$(readlink -f $(dirname $0))
dst=.
source $src/common.sh

check_clone_repo
regenerate_docs
remove_repo

jekyll build --source "$src" --destination "$dst"/_site
