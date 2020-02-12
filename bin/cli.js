#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-koa-starter project.
 * created by Lim Kyungmin, 01/02/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-koa-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
