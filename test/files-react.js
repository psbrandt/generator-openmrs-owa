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

describe('Files check for ReactJS', function() {
  before(function(done) {
    helper.run({}, {
      'features': ['includeReact']
    }, done);
  });

  it('should create the expected files for ReactJS project', function() {
    assert.file([
                  '.gitignore',
                  'app/css/omrsowa.css',
                  'app/img/omrs-button.png',
                  'app/img/openmrs-with-title-small.png',
                  'app/index.html',
                  'app/manifest.webapp',
                  'app/js/omrsowa.jsx',
                  'app/js/routes.jsx',
                  'app/js/components/App.jsx',
                  'webpack.config.js',
                  'package.json',
                  'LICENSE',
                  'README.md'
                ]);
  });

  it('should have correct app/index.html file', function() {
    assert.fileContent('app/index.html', '<div id="app">If you see this text, look for an error in your JavaScript Console.</div>');
  })
});
