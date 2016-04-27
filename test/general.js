/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */
'use strict';

var helper = require('./helper');
var assert = require('yeoman-assert');

describe('General tests', function() {
  before(function(done) {
    helper.run({}, {}, done);
  });

  it('should create the expected files', function() {
    assert.file([
      '.gitignore',
      'app/css/omrsowa.css',
      'app/img',
      'app/img/omrs-button.png',
      'app/img/openmrs-with-title-small.png',
      'app/index.html',
      'app/js',
      'app/js/omrsowa.js',
      'app/manifest.webapp',
      'webpack.config.js',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });

  it('should generate correct dependencies', function() {
    ['bestzip', 'babel-loader', 'browser-sync', 'css-loader',
      'rimraf', 'copy-webpack-plugin'].forEach(function(dep) {
      assert.fileContent([['package.json', dep]]);
    });
  });

  it('should correctly populate author', function() {
    ['package.json'].forEach(function(fileName) {
      assert.fileContent([[fileName, /omrsuser/]]);
    });
  });

  it('should generate expected npm scripts', function() {
    ['clean', 'build', 'build:prod', 'build:deploy',
      'watch', 'test', 'zip'].forEach(function(task) {
      assert.fileContent([['package.json', task]]);
    });
  });
});
