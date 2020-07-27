#!/usr/bin/env bash
nx affected:build --prod --base="origin/$BITBUCKET_PR_DESTINATION_BRANCH" --head=$BITBUCKET_BRANCH --exclude=components,components-button,layouts,platform
