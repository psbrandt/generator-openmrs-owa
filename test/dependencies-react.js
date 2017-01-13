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
