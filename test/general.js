/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
'use strict';

var helper = require('./helper');
var assert = require('yeoman-assert');

describe('General tests', function() {
  before(function(done) {
    helper.run({}, {}, done);
  });

  it('should generate correct dependencies', function() {
    ['babel-core',
     'babel-loader',
     'babel-preset-es2015',
     'browser-sync',
     'browser-sync-webpack-plugin',
     'copy-webpack-plugin',
     'css-loader',
     'eslint',
     'extract-text-webpack-plugin',
     'file-loader',
     'html-loader',
     'html-webpack-plugin',
     'raw-loader',
     'rimraf',
     'style-loader',
     'url-loader',
     'webpack',
     'yargs',
     'archiver',
     'on-build-webpack'].forEach(function(dep) {
      assert.fileContent([['package.json', dep]]);
    });
  });

  it('should correctly populate author', function() {
    ['package.json'].forEach(function(fileName) {
      assert.fileContent([[fileName, /omrsuser/]]);
    });
  });

  it('should generate expected npm scripts', function() {
    ['clean',
     'build',
     'build:dev',
     'build:prod',
     'build:deploy',
     'watch',
     'test'].forEach(function(task) {
      assert.fileContent([['package.json', task]]);
    });
  });
});
