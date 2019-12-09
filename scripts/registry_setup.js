#!/usr/bin/env node

const url = require('url');

const { execSync, spawnSync } = require('child_process');

const registry = url.parse(process.env.NPM_REGISTRY_URL || 'https://registry.npmjs.org');

const host = registry.host;

const token = `${process.env.NPM_TOKEN}`;

const content = `//${host}/:_authToken=${token}

registry=${registry.href}`;

try {
  const shell = execSync(`printf '${content}' >> .npmrc`);
  process.stdout.write('Done');
} catch (error) {
  process.exit(error.status);

}
