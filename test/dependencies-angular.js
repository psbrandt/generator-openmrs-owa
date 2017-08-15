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
