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

describe('Dependencies tests for ReactJS', function() {

  describe('ReactJS alone', function() {
    before(function(done) {
      helper.run({}, {
        'features': ['includeReact']
      }, done);
    });

    it('should add selected ReactJS dependecies', function() {
      assert.fileContent([['package.json', /react/]]);
      assert.fileContent([['package.json', /react-dom/]]);
      assert.fileContent([['package.json', /react-router/]]);
      assert.fileContent([['package.json', /babel-preset-react/]]);
    });

    it('should not add JQuery dependencies', function() {
      assert.noFileContent([['package.json', /jquery/]]);
    });
  });

  describe('ReactJS with Redux', function() {
    before(function(done) {
      helper.run({}, {
        'features': ['includeReact', 'includeRedux']
      }, done);
    });

    it('should add selected ReactJS and Redux dependecies', function() {
      assert.fileContent([['package.json', /react/]]);
      assert.fileContent([['package.json', /react-dom/]]);
      assert.fileContent([['package.json', /react-router/]]);
      assert.fileContent([['package.json', /babel-preset-react/]]);
      assert.fileContent([['package.json', /redux/]]);
      assert.fileContent([['package.json', /react-redux/]]);
      assert.fileContent([['package.json', /redux-thunk/]]);
      assert.fileContent([['package.json', /redux-promise-middleware/]]);
    });

    it('should not add JQuery dependencies', function() {
      assert.noFileContent([['package.json', /jquery/]]);
    });
  });

});
