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

var generators = require('yeoman-generator');
var yosay = require('yosay');
var os = require('os');
var fs = require('fs');
var path = require('path');

var OPENMRS_STANDALONE_APPDATA_DIR = 'openmrs-standalone-2.4/appdata';
var DEFAULT_SDK_SERVER = 'openmrs/openmrs-platform';
var DEFAULT_OWA_DIR = 'owa';
var DEFAULT_ENTERPRISE_APPDATA_DIR = '/usr/share/tomcat7/.OpenMRS';

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install', {
      desc: 'Skips the welcome message',
      type: Boolean
    });
  },

  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    this.getLocalDirDefault = function(answers) {
      if (answers.deployType === 'sdk') {
        return os.homedir().replace(/\\/g,'/') + '/' + DEFAULT_SDK_SERVER + '/' + DEFAULT_OWA_DIR;;
      } else if (answers.deployType === 'standalone') {
        return os.homedir().replace(/\\/g,'/') + '/' + OPENMRS_STANDALONE_APPDATA_DIR + '/' + DEFAULT_OWA_DIR;;
      } else {
        return DEFAULT_ENTERPRISE_APPDATA_DIR + '/' + DEFAULT_OWA_DIR; // There's some work to do here to create a sane default for Windows
      }
    };

    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      this.log(yosay('Welcome to the OpenMRS Open Web App generator. Answer the following questions to help scaffold your app.'));
    }

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What is your app name?',
      validate: function(input) {
        if (input === null || input === "") {
          return "App name is required";
        } else {
          return true;
        }
      }
    }, {
      type: 'input',
      name: 'appDesc',
      message: 'What is your app description?',
      validate: function(input) {
        if (input === null || input === "") {
          return "App description is required";
        } else {
          return true;
        }
      }
    }, {
      type: 'list',
      name: 'features',
      message: 'What libraries would you like to include?',
      choices: [{
        name: 'jQuery',
        value: 'includeJQuery',
        checked: false
      }, {
        name: 'AngularJS',
        value: 'includeAngular',
        checked: true
      }, {
        name: 'ReactJS',
        value: 'includeReact',
        checked: false
      }, {
        name: 'ReactJS + Redux',
        value: 'includeReact includeRedux',
        checked: false
      }]
    }, {
      type: 'list',
      name: 'deployType',
      message: 'What type of server are you running locally?',
      choices: [{
        name: 'SDK',
        value: 'sdk'
      }, {
        name: 'Standalone',
        value: 'standalone'
      }, {
        name: 'Enterprise',
        value: 'enterprise'
      }]
    }, {
      type: 'input',
      name: 'appEntryPoint',
      message: 'What URL will your app be served from?',
      default: function(answers) {
        var suffix = 'owa/' + answers.appName.toLowerCase().replace(/\s+/g, "") + '/index.html';

        if(process.env.OMRS_OWA_BASE_URL) {
          return process.env.OMRS_OWA_BASE_URL.endsWith(path.sep) ? process.env.OMRS_OWA_BASE_URL + suffix : process.env.OMRS_OWA_BASE_URL + path.sep + suffix;
        } else {
          if(answers.deployType === 'standalone') {
            return 'http://localhost:8081/openmrs-standalone/' + suffix;
          } else {
            return 'http://localhost:8080/openmrs/' + suffix;
          }
        }
      }
    }, {
      type: 'input',
      name: 'localDeployDirectory',
      message: 'What is the path of your local Open Web Apps directory?',
      default: process.env.OMRS_OWA_LOCAL_DIR || this.getLocalDirDefault
    }, {
      type: 'input',
      name: 'githubId',
      message: 'What is your GitHub username?',
      default: process.env.OMRS_OWA_GITHUB_ID || process.env.USER
    }, {
      type: 'input',
      name: 'appRepo',
      message: 'What will the GitHub repo URL be?',
      default: function(answers) {
        return 'https://github.com/' + answers.githubId + '/' + 'openmrs-owa-' + answers.appName.toLowerCase().replace(/\s+/g, "");
      }
    }];

    this.prompt(prompts, function(answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }

      this.appId = answers.appName.toLowerCase().replace(/\s+/g, "");
      this.appName = answers.appName;
      this.appDesc = answers.appDesc;
      this.includeJQuery = hasFeature('includeJQuery');
      this.includeAngular = hasFeature('includeAngular');
      this.includeReact = hasFeature('includeReact');
      this.includeRedux = this.includeReact && hasFeature('includeRedux');
      this.appEntryPoint = answers.appEntryPoint;
      this.localDeployDirectory = answers.localDeployDirectory;
      this.devName = answers.githubId;
      this.githubRep = answers.appRepo;
      this.deployType = answers.deployType;

      done();
    }.bind(this));
  },

  writing: {
    webpack: function() {
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        {
          includeJQuery: this.includeJQuery,
          includeAngular: this.includeAngular,
          includeReact: this.includeReact,
          includeRedux: this.includeRedux,
          date: (new Date).toISOString().split('T')[0],
          name: this.pkg.name,
          version: this.pkg.version,
          appId: this.appId,
          appEntryPoint: this.appEntryPoint,
          localDeployDirectory: this.localDeployDirectory
        }
      );
    },

    manifest: function() {
      this.fs.copyTpl(
        this.templatePath('manifest.webapp'),
        this.destinationPath('app/manifest.webapp'),
        {
          appName: this.appName,
          appDesc: this.appDesc,
          devName: this.devName,
          githubRepo: this.githubRep
        }
      );
    },

    packageJSON: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          includeJQuery: this.includeJQuery,
          includeAngular: this.includeAngular,
          includeReact: this.includeReact,
          includeRedux: this.includeRedux,
          appId: this.appName.toLowerCase().replace(/\s+/g, ""),
          appDesc: this.appDesc,
          devName: this.devName,
          githubRepo: this.githubRep
        }
      );
    },

    git: function() {
      this.fs.copyTpl(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    styles: function() {
      this.fs.copyTpl(
        this.templatePath('styles/index.css'),
        this.destinationPath('app/css' + '/' + this.appId + '.css')
      );
    },

    scripts: function() {
      // AngularJS
      if (this.includeAngular) {
        this.fs.copyTpl(
          this.templatePath('scripts/angular/index.js'),
          this.destinationPath('app/js' + '/' + this.appId + '.js'),
          {
            appId: this.appId
          }
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/home/home.component.js'),
          this.destinationPath('app/js/home/home.component.js')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/home/home.controller.js'),
          this.destinationPath('app/js/home/home.controller.js')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/home/home.js'),
          this.destinationPath('app/js/home/home.js')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/main/main.component.js'),
          this.destinationPath('app/js/main/main.component.js')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/main/main.controller.js'),
          this.destinationPath('app/js/main/main.controller.js')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/angular/main/main.js'),
          this.destinationPath('app/js/main/main.js'),
          {
            appName: this.appName
          }
        );
      }

      // ReactJS
      else if (this.includeReact) {
        this.fs.copyTpl(
          this.templatePath('scripts/react/index' + (this.includeRedux ? '.withRedux.jsx' : '.jsx')),
          this.destinationPath('app/js/' + this.appId + '.jsx'),
          {
            appId: this.appId
          }
        );
        this.fs.copyTpl(
          this.templatePath('scripts/react/routes' + (this.includeRedux ? '.withRedux.jsx' : '.jsx')),
          this.destinationPath('app/js/routes.jsx')
        );
        this.fs.copyTpl(
          this.templatePath('scripts/react/components/App.jsx'),
          this.destinationPath('app/js/components/App.jsx')
        );

        if (this.includeRedux) {
          this.fs.copyTpl(
            this.templatePath('scripts/react/redux-store.withRedux.jsx'),
            this.destinationPath('app/js/redux-store.jsx')
          );
          this.fs.copyTpl(
            this.templatePath('scripts/react/reducers.withRedux.js'),
            this.destinationPath('app/js/reducers.js')
          );
        }
      }

      // jQuery
      else {
        this.fs.copyTpl(
          this.templatePath('scripts/jquery/index.js'),
          this.destinationPath('app/js' + '/' + this.appId + '.js'),
          {
            appId: this.appId
          }
        );
      }
    },

    html: function() {
      //AngularJS
      if (this.includeAngular) {
        this.fs.copyTpl(
          this.templatePath('html/angular/index.html'),
          this.destinationPath('app/index.html'),
          {
            appName: this.appName,
            appDesc: this.appDesc,
            appId: this.appId
          }
        );
        this.fs.copyTpl(
          this.templatePath('html/angular/home/home.html'),
          this.destinationPath('app/js/home/home.html'),
          {
            appName: this.appName,
            appDesc: this.appDesc,
            appId: this.appId
          }
        );
        this.fs.copyTpl(
          this.templatePath('html/angular/main/main.html'),
          this.destinationPath('app/js/main/main.html'),
          {
            appName: this.appName,
            appDesc: this.appDesc,
            appId: this.appId
          }
        );
      }
      // ReactJS
      else if (this.includeReact) {
        this.fs.copyTpl(
          this.templatePath('html/react/index.html'),
          this.destinationPath('app/index.html'),
          {
            appName: this.appName,
            appDesc: this.appDesc,
            appId: this.appId
          }
        );
        // TODO
      }
      // jQuery
      else {
        this.fs.copyTpl(
          this.templatePath('html/jquery/index.html'),
          this.destinationPath('app/index.html'),
          {
            appName: this.appName,
            appDesc: this.appDesc,
            appId: this.appId
          }
        );
      }
    },

    images: function() {
      this.fs.copy(
        this.templatePath('img/omrs-button.png'),
        this.destinationPath('app/img/omrs-button.png')
      );
      this.fs.copy(
        this.templatePath('img/openmrs-with-title-small.png'),
        this.destinationPath('app/img/openmrs-with-title-small.png')
      );
    },

    readme: function() {
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('README.md'),
        {
          appName: this.appName,
          appId: this.appId,
          appEntryPoint: this.appEntryPoint,
          localDeployDirectory: this.localDeployDirectory
        }
      );
    },

    license: function() {
      this.fs.copyTpl(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
      );
    }
  },

  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
