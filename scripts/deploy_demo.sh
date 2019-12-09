#!/usr/bin/env bash
if [ -d "dist/apps/demo" ]
then
    echo "Deploying Demo Project to ${ENV}"
    now deploy -t ${NOW_TOKEN_SELISE} --scope=safire-team  --prod ./dist/apps/demo --name ${NOW_PROJECT}
    echo "Info: Successfully deployed demo to ${ENV}"
else
    echo "Info: The Demo Project hasn't be updated. Nothing to deploy."
    exit 0;
fi
