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

describe('Files check for ReactJS', function() {

  const reactFiles = [
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
  ];

  describe('ReactJS alone', function() {
    before(function (done) {
      helper.run({}, {
        'features': ['includeReact']
      }, done);
    });

    it('should create the expected files for ReactJS project', function () {
      assert.file(reactFiles);
    });

    it('should have correct app/index.html file', function () {
      assert.fileContent('app/index.html', '<div id="app">If you see this text, look for an error in your JavaScript Console.</div>');
    });

    it('should have correct app/js/omrsowa.jsx file', function () {
      assert.noFileContent('app/js/omrsowa.jsx', '<Provider store={store}>');
    });

    it('should have correct app/js/routes.jsx file', function () {
      assert.fileContent('app/js/routes.jsx', 'export default () => {');
    });
  });

  describe('ReactJS with Redux', function() {
    before(function (done) {
      helper.run({}, {
        'features': ['includeReact', 'includeRedux']
      }, done);
    });

    it('should create the expected files for ReactJS+Redux project', function () {
      assert.file(reactFiles);
      assert.file(['app/js/redux-store.jsx', 'app/js/reducers.js']);
    });

    it('should have correct app/index.html file', function () {
      assert.fileContent('app/index.html', '<div id="app">If you see this text, look for an error in your JavaScript Console.</div>');
    });

    it('should have correct app/js/omrsowa.jsx file', function () {
      assert.fileContent('app/js/omrsowa.jsx', '<Provider store={store}>');
    });

    it('should have correct app/js/routes.jsx file', function () {
      assert.fileContent('app/js/routes.jsx', 'export default (store) => {');
    });
  });
});
