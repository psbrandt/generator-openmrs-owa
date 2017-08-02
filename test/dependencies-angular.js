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

describe('Dependencies tests for AngularJS', function() {
  before(function(done) {
    helper.run({}, {
      'features': ['includeAngular']
    }, done);
  });

  it('should add selected AngularJS dependecies', function() {
    assert.fileContent([['package.json', /angular/]]);
    assert.fileContent([['package.json', /angular-ui-router/]]);
    assert.fileContent([['package.json', /openmrs-contrib-uicommons/]]);
    assert.fileContent([['package.json', /angular-animate/]]);
  });

  it('should not add JQuery dependencies', function() {
    assert.noFileContent([['package.json', /jquery/]]);
  });
});
