#!/bin/node

const { execSync, spawnSync } = require('child_process');
const branch = process.env['BITBUCKET_BRANCH'];
const environment = process.env['BITBUCKET_DEPLOYMENT_ENVIRONMENT'];

try {

  /*We are making a stable release*/
  if (branch === 'master') {
    const output = spawnSync('lerna version --conventional-commits --conventional-graduate=* --changelog-preset cz-lerna-changelog --force-publish=* --no-push --no-commit-hooks --yes');
    /*lerna publish  --conventional-commits --conventional-prerelease --changelog-preset cz-lerna-changelog -m "chore(release): publish %s" --no-push --no-commit-hooks*/

    /*We are making a prerelease*/
  } else {

    const output = spawnSync('lerna version --conventional-commits --conventional-prerelease=* --changelog-preset cz-lerna-changelog --yes');
    // We are making a prerelease
    /*lerna publish  --conventional-commits --conventional-prerelease --changelog-preset cz-lerna-changelog -m "chore(release): publish %s" --no-push --no-commit-hooks*/

  }

} catch (e) {

}
