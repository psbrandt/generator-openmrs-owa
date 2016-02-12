<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

# OpenMRS Open Web App Generator

[![Build Status](https://img.shields.io/travis/psbrandt/generator-openmrs-owa.svg?style=flat-square)](http://travis-ci.org/psbrandt/generator-openmrs-owa)
[![Downloads](https://img.shields.io/npm/dt/generator-openmrs-owa.svg?style=flat-square)](https://www.npmjs.com/package/generator-openmrs-owa)

> [Yeoman](http://yeoman.io) generator that scaffolds an [OpenMRS Open Web App](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module)

[![OpenMRS OWA Asciicast](https://asciinema.org/a/35039.png)](https://asciinema.org/a/35039?autoplay=1)

## Features

The following features are currently supported:

  - [x] Scaffold basic OWS folder structure and files
  - [x] Production build with [Gulp](http://gulpjs.com/)
  - [x] Local deploy with Gulp
  - [x] Package management with [Bower](http://bower.io/)

## Getting Started

 - Install dependencies: `npm install --global yo gulp bower`
 - Install the generator: `npm install --global generator-openmrs-owa`
 - Create directory for your app: `mkdir openmrs-owa-myapp && cd $_`
 - Run `yo openmrs-owa` to scaffold the Open Web App
 - Run `gulp` to build distributable zip file
 - Run `gulp deploy-local` to deploy directly to your local server

## Extending

Install Bower packages dependencies as follows:

````
bower install --save <package>
````

Be sure to include the following in your `html` files at the position you want the Bower dependencies injected:

````
<!-- bower:js -->
<!-- endbower -->
````
Do the same for your Bower stylesheet dependencies, but replace `js` with `css`.

Any files that you add manually must be added in the `app` directory.

## Options

 - `--skip-welcome-message` Skips Yeoman's greeting before displaying options.
 - `--skip-install` Skips automatically running `bower` and `npm`.

## Environment Variables

The generator will read the following environment variables and use their values as the default when generating a new Open Web App:

- `OMRS_OWA_LOCAL_DIR`: The directory to use for local deployment
- `OMRS_OWA_GITHUB_ID`: Your GitHub username

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md).

## Support

It's best to ask your questions on [OpenMRS talk](https://talk.openmrs.org/tags/c/software/javascript).

## License

[MPL-2.0](http://openmrs.org/license/)
