#!/usr/bin/env bash

# Upload documentation for stable rust on master.
if [ "$TRAVIS_BRANCH" = 'master' ] \
    && [ "$TRAVIS_PULL_REQUEST" = 'false' ] \
    && [ "$TRAVIS_RUST_VERSION" = 'stable' ]; then

    # Automatically redirect to our crate documentation.
    echo '<meta http-equiv="refresh" content="0; url=recital/index.html"/>' > target/doc/index.html

    # Install "GitHub Pages Import" tool to upload documentation.
    pip install ghp-import "--user=$USER"

    # Put documentation into gh-pages branch.
    "$HOME/.local/bin/ghp-import" -n target/doc

    # Push the changes to the branch to the repository.
    git push -qf "https://$TOKEN@github.com/$TRAVIS_REPO_SLUG.git" gh-pages

fi
