#!/usr/bin/env node
'use strict';
/* global require, process */


var meow = require('meow');
var jdf = require('.');

meow({
  help: [
    'Usage',
    '  $ jade-doc --input file.jade | jade-doc-faucet',
    '',
  ]
});

process.stdin.pipe(jdf).pipe(process.stdout);