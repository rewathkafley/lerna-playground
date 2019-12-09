const semanticRelease = require('semantic-release');
const { WritableStreamBuffer } = require('stream-buffers');
const { version } = require('../package');

const stdoutBuffer = new WritableStreamBuffer();
const stderrBuffer = new WritableStreamBuffer();
const branch = process.env.BITBUCKET_BRANCH;
const environment = process.env.BITBUCKET_DEPLOYMENT_ENVIRONMENT;
return performRelease();

//import config from '../.releaserc';

async function performRelease() {
  try {
    const result = await semanticRelease({
      version,
      branch,
      dryRun: true
    }, {
      // Run semantic-release from `/path/to/git/repo/root` without having to change local process `cwd` with `process.chdir()`
      cwd: process.cwd(),
      // Pass the variable `MY_ENV_VAR` to semantic-release without having to modify the local `process.env`
      env: { ...process.env, DEPLOY_ENV: environment },
      // Store stdout and stderr to use later instead of writing to `process.stdout` and `process.stderr`
      stdout: stdoutBuffer,
      stderr: stderrBuffer
    });

    if (result) {
      const { lastRelease, commits, nextRelease, releases } = result;
      console.log(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`);
      if (lastRelease.version) {
        console.log(`The last release was "${lastRelease.version}".`);
      }
      for (const release of releases) {
        console.log(`The release was published with plugin "${release.pluginName}".`);
      }
    } else {
      console.log('No release published.');
    }

    // Get stdout and stderr content
    const logs = stdoutBuffer.getContentsAsString('utf8');
    const errors = stderrBuffer.getContentsAsString('utf8');
    console.log(logs);
    if (errors) {
      console.error(errors);
    }
  } catch (err) {
    console.error('The automated release failed with %O', err);
    process.exit(1);
  }

}

