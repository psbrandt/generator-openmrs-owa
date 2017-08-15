/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
'use strict';

var path = require('path');
var helpers = require('yeoman-test');
var assign = require('object-assign');

module.exports = {
  run: function (options, prompts, done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions(assign({
        'skip-install': true
      }, options))
      .withPrompts(assign({
        'appName': 'omrsowa',
        'appDesc': 'omrsdesc',
        'features': ['includeAngular'],
        'deployType': 'standalone',
        'githubId': 'omrsuser',
        'appRepo': 'https://github.com/omrsuser/openmrs-ows-omrsowa'
      }, prompts))
      .on('end', done);
  }
};
