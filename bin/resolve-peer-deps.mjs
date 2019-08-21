#!/usr/bin/env node --experimental-modules --es-module-specifier-resolution=node --no-warnings


/*
Output:

/usr/local/bin/node /usr/local/lib/node_modules/npm/bin/npm-cli.js install --scripts-prepend-node-path=auto

> fsevents@1.2.9 install ./node_modules/jest-haste-map/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download
[fsevents] Success: "./node_modules/jest-haste-map/node_modules/fsevents/lib/binding/Release/node-v72-darwin-x64/fse.node" is installed via remote
npm WARN bitmex-rest-api@0.0.1 requires a peer of superagent@^5.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN bitmex-rest-api@0.0.1 requires a peer of mime@^2.0.3 but none is installed. You must install peer dependencies yourself.
npm WARN bitmex-rest-api@0.0.1 requires a peer of extend@^3.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN bitmex-rest-api@0.0.1 requires a peer of fsevents@latest but none is installed. You must install peer dependencies yourself.

added 620 packages from 410 contributors and audited 875555 packages in 10.882s
found 2 vulnerabilities (1 low, 1 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details

Process finished with exit code 0
 */
