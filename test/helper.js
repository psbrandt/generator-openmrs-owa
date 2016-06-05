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
