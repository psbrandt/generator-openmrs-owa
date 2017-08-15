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

describe('Files check for AngularJS', function() {
  before(function(done) {
    helper.run({}, {}, done);
  });

  it('should create the expected files for AngularJS project', function() {
    assert.file([
      '.gitignore',
      'app/css/omrsowa.css',
      'app/img/omrs-button.png',
      'app/img/openmrs-with-title-small.png',
      'app/index.html',
      'app/js/omrsowa.js',
      'app/manifest.webapp',
      'app/js/home/breadcrumbs.html',
      'app/js/home/home.html',
      'app/js/home/header.html',
      'app/js/home/notification.html',
      'app/js/home/translate.html',
      'app/js/home/home.js',
      'app/js/home/components/breadcrumbs.component.js',
      'app/js/home/components/header.component.js',
      'app/js/home/components/notification.component.js',
      'app/js/home/components/translate.component.js',
      'app/js/home/components/patientSearch.component.js',
      'app/js/home/components/encounter.component.js',
      'app/js/home/components/observation.component.js',
      'app/js/home/components/provider.component.js',
      'app/js/home/controllers/breadcrumbs.controller.js',
      'app/js/home/controllers/header.controller.js',
      'app/js/home/controllers/notification.controller.js',
      'app/js/home/controllers/translate.controller.js',
      'app/js/home/controllers/patientSearch.controller.js',
      'app/js/home/controllers/encounter.controller.js',
      'app/js/home/controllers/observation.controller.js',
      'app/js/home/controllers/provider.controller.js',
      'test/patientSearchTest.js',
      'test/encounterSearchTest.js',
      'test/observationSearchTest.js',
      'test/providerSearchTest.js',
      'app/js/main/main.component.js',
      'app/js/main/main.controller.js',
      'app/js/main/main.html',
      'app/js/main/main.js',
      'webpack.config.js',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
