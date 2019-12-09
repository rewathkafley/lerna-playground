#!/bin/bash
branch = "$(BITBUCKET_BRANCH)"
environment="$(BITBUCKET_DEPLOYMENT_ENVIRONMENT)"

semantic-release --branch feature/ci_setup --dry-run
echo "Deploying to $environment"
