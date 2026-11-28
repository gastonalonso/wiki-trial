#!/usr/bin/env bash
# Print the site path of the page a pull request changed, such as "places/nile/".
#
# Usage: scripts/changed-page.sh BASE HEAD BUILT_SITE_DIR
#
# Sveltia CMS opens one pull request per page, so the first page changed between
# BASE and HEAD is the one to show. Prints nothing (the home page) when no page
# changed, or when the page wasn't built, as happens with a draft.
set -euo pipefail

base=$1 head=$2 site=$3

file=$(git diff --name-only --diff-filter=AMR "$base" "$head" -- 'src/content/docs/*.md' | head -n 1)
[ -n "$file" ] || exit 0

page=${file#src/content/docs/}
page=${page%.md}
case "$page" in
	index) page="" ;;                  # the home page
	*/index) page="${page%/index}/" ;; # a section's overview page is its folder
	*) page="$page/" ;;
esac

# Only plain path characters, since the path goes into the preview's HTML
case "$page" in *[!a-zA-Z0-9/_.-]*) exit 0 ;; esac

[ -f "$site/${page}index.html" ] && printf '%s' "$page"
exit 0
