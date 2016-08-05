<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

# OpenMRS Open Web App Generator

[![Build Status](https://img.shields.io/travis/psbrandt/generator-openmrs-owa.svg?style=flat-square)](http://travis-ci.org/psbrandt/generator-openmrs-owa)
[![Downloads](https://img.shields.io/npm/dt/generator-openmrs-owa.svg?style=flat-square)](https://www.npmjs.com/package/generator-openmrs-owa)

> [Yeoman](http://yeoman.io) generator that scaffolds an [OpenMRS Open Web App](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module)

[![OpenMRS OWA Asciicast](https://asciinema.org/a/81860.png)](https://asciinema.org/a/81860?autoplay=1)

## Features

The following features are currently supported:

  - [x] Scaffold basic OWA folder structure and files
  - [x] Production build with [Webpack](https://webpack.github.io/)
  - [x] Local deploy with Webpack
  - [x] Package management with [npm](http://npmjs.com/)
  - [x] Live reload, interaction sync and more with [Browsersync](https://www.browsersync.io/)

## Getting Started

 - Install dependencies: `npm install --global yo`
 - Install the generator: `npm install --global generator-openmrs-owa`
 - Create directory for your app: `mkdir openmrs-owa-myapp && cd $_`
 - Run `yo openmrs-owa` to scaffold the Open Web App
 - Run `npm run build:prod` to build distributable zip file
 - Run `npm run build:deploy` to deploy directly to your local server
 - Run `npm run watch` for live reloading and more

## Extending

Install [npm](http://npmjs.com/) packages dependencies as follows:

````sh
npm install --save <package>
````

To use the installed package, import it as follows:

````js
//import and assign to variable
import variableName from 'package';
````

To contain package in vendor bundle, remember to add it to vendor entry point array, eg.:

````js
entry: {
  app : `${__dirname}/app/js/owa.js`,
  css: `${__dirname}/app/css/owa.css`,
  vendor : [
    'package',
    ...//other packages in vendor bundle
  ]
},
````

Any files that you add manually must be added in the `app` directory.

## Options

 - `--skip-welcome-message` Skips Yeoman's greeting before displaying options.
 - `--skip-install` Skips automatically running `npm install`.

## Environment Variables

The generator will read the following environment variables and use their values as the default when generating a new Open Web App:

- `OMRS_OWA_LOCAL_DIR`: The directory to use for local deployment

> e.g. `/Users/pascal/openmrs-standalone-2.4/appdata/owa`

- `OMRS_OWA_GITHUB_ID`: Your GitHub username

> e.g. `psbrandt`

- `OMRS_OWA_BASE_URL`: The base URL of your local OpenMRS server

> e.g. `http://localhost:8082/openmrs-standalone`

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md).

## Support

[![OpenMRS Talk](https://omrs-shields.psbrandt.io/custom/openmrs/talk/F26522?logo=openmrs)](http://talk.openmrs.org)
[![OpenMRS IRC](https://img.shields.io/badge/openmrs-irc-EEA616.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MTIiIGhlaWdodD0iNjEyIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiI%2BPHBhdGggZD0iTTE1MyAyMjkuNWMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzEzMS44NjcgMzA2IDE1MyAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzE3NC4xMzMgMjI5LjUgMTUzIDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzI4NC44NjcgMzA2IDMwNiAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzMyNy4xMzMgMjI5LjUgMzA2IDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzQzNy44NjcgMzA2IDQ1OSAzMDZzMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzQ4MC4xMzMgMjI5LjUgNDU5IDIyOS41ek0zMDYgMEMxMzcuMDEyIDAgMCAxMTkuODc1IDAgMjY3Ljc1YzAgODQuNTE0IDQ0Ljg0OCAxNTkuNzUgMTE0Ljc1IDIwOC44MjZWNjEybDEzNC4wNDctODEuMzRjMTguNTUyIDMuMDYyIDM3LjYzOCA0Ljg0IDU3LjIwMyA0Ljg0IDE2OS4wMDggMCAzMDYtMTE5Ljg3NSAzMDYtMjY3Ljc1UzQ3NS4wMDggMCAzMDYgMHptMCA0OTcuMjVjLTIyLjMzOCAwLTQzLjkxLTIuNi02NC42NDMtNy4wMmwtOTAuMDQgNTQuMTI0IDEuMjA0LTg4LjdDODMuNSA0MTQuMTMzIDM4LjI1IDM0NS41MTMgMzguMjUgMjY3Ljc1YzAtMTI2Ljc0IDExOS44NzUtMjI5LjUgMjY3Ljc1LTIyOS41czI2Ny43NSAxMDIuNzYgMjY3Ljc1IDIyOS41UzQ1My44NzUgNDk3LjI1IDMwNiA0OTcuMjV6IiBmaWxsPSIjZmZmIi8%2BPC9zdmc%2B)](http://irc.openmrs.org)
[![OpenMRS Telegram](https://img.shields.io/badge/openmrs-telegram-009384.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIuNjY3IiB5MT0iLjE2NyIgeDI9Ii40MTciIHkyPSIuNzUiPjxzdG9wIHN0b3AtY29sb3I9IiMzN2FlZTIiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxZTk2YzgiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ%2BPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjY2IiB5MT0iLjQzNyIgeDI9Ii44NTEiIHkyPSIuODAyIj48c3RvcCBzdG9wLWNvbG9yPSIjZWZmN2ZjIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9IiNjOGRhZWEiIGQ9Ik05OCAxNzVjLTMuODg4IDAtMy4yMjctMS40NjgtNC41NjgtNS4xN0w4MiAxMzIuMjA3IDE3MCA4MCIvPjxwYXRoIGZpbGw9IiNhOWM5ZGQiIGQ9Ik05OCAxNzVjMyAwIDQuMzI1LTEuMzcyIDYtM2wxNi0xNS41NTgtMTkuOTU4LTEyLjAzNSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xMDAuMDQgMTQ0LjQxbDQ4LjM2IDM1LjczYzUuNTIgMy4wNDQgOS41IDEuNDY3IDEwLjg3Ni01LjEyNGwxOS42ODUtOTIuNzYzYzIuMDE2LTguMDgtMy4wOC0xMS43NDYtOC4zNTgtOS4zNWwtMTE1LjU5IDQ0LjU3MmMtNy44OSAzLjE2NS03Ljg0NCA3LjU2Ny0xLjQ0IDkuNTI4bDI5LjY2NCA5LjI2IDY4LjY3My00My4zMjZjMy4yNC0xLjk2NiA2LjIxNy0uOTEgMy43NzUgMS4yNTgiLz48L3N2Zz4%3D)](https://telegram.me/openmrs)
[![OpenMRS Wiki](https://img.shields.io/badge/openmrs-wiki-5B57A6.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTQyIiB2aWV3Qm94PSIwIDAgMTYwIDE0MiI%2BPHBhdGggY2xhc3M9InN0MCIgZD0iTTExMy42MTUgOTQuNDk0Yy0yLjAxNi0zLjk3NC00LjQwNS03Ljk5LTcuMi0xMi4wNzctMi0yLjkzLTQuMTQ1LTUuNzc4LTYuMzg3LTguNTY3LS45MS0xLjEzNi0uNTMtMi41NDguMTY3LTMuMjUuNjg4LS43MDUgMS4zOC0xLjQxIDIuMDc2LTIuMTIgOS41OC05Ljc3IDE5LjQ5LTE5Ljg3MyAyNy4wOS0zMC43ODcgOC4wOC0xMS42MSAxMi41Ni0yMi42MjQgMTMuNjktMzMuOTU0LjEyLTEuMTQtLjQtMi4zNS0xLjMyLTMuMDUtLjYtLjQ2LTEuMzMtLjctMi4wNy0uNy0uNDEgMC0uODIuMDctMS4yMS4yMi03LjM3IDIuODItMTQuODUgNC45Ni0yMS42OCA2LjU1LTEuMzkuMzItMi41MSAxLjM2LTIuOTggMi42LTQuOTggMTMuNjMtMTcuNjggMjYuNjEtMzEuMDEgNDAuMi0uNTMuNTEtMS4yOCAxLjE4LTIuNSAxLjE4cy0xLjk2LS42NS0yLjUtMS4xOGMtMTMuMzMtMTMuNTktMjYuMDMtMjYuNTItMzEtNDAuMTUtLjQ2LTEuMjQtMS41OS0yLjI4LTIuOTgtMi42QzM2Ljk0IDUuMjIgMjkuNDUgMi45IDIyLjEuMDhjLS4zOTgtLjE1LS44MS0uMjI1LTEuMjItLjIyNS0uNzQgMC0xLjQ3LjI0LTIuMDcuNy0uOTQuNzE4LTEuNDQgMS44NzItMS4zMiAzLjA0OCAxLjEzIDExLjMzMiA1LjYgMjIuNDggMTMuNjg0IDM0LjA5IDcuNiAxMC45MTUgMTcuNTEgMjEuMDE3IDI3LjA5IDMwLjc4NyAxNy42NSAxNy45OTQgMzQuMzMgMzQuOTk3IDM1Ljc5IDU0LjcxMy4xMyAxLjc4IDEuNjIgMy4xNTggMy40IDMuMTU4aDIwLjc0Yy45NCAwIDEuODMtLjM4IDIuNDctMS4wNi42NS0uNjcuOTktMS41OC45NC0yLjUyLS4xOC0zLjcxLS43Mi03LjQyLTEuNTktMTEuMTZoLjAxYy0uMDI4LS4xMS0uMDQ3LS4yMi0uMDQ3LS4zMyAwLS43NS41ODgtMS4zOCAxLjM1Ny0xLjM4LjA3IDAgLjEzLjAyLjIuMDMgMTYuOTMgMi40OCAyNy42MzYgNi40NCAyNy42NSAxMC44di4wMWMwIDQuMTEtOS42MjMgMTAuMzEtMjUuMjY2IDE0Ljg1bC0uMDA1LjAxYy0xLjM5LjQtMi40MDYgMS42Ni0yLjQwNiAzLjE1IDAgMS44MSAxLjQ5MyAzLjI4IDMuMzQgMy4yOC4yNTUgMCAuNS0uMDMuNzQtLjA4IDIxLjAyNi00Ljg2IDM0Ljk2NS0xMy4wMzQgMzQuOTY1LTIyLjI2MiAwLTEwLjk1NC0xOC44NC0yMC43NC00Ni45LTI1LjE1MnpNNTguMDEgODMuODA2Yy0uNDI1LS40NDQtMS4yNzctMS4wMzgtMi40MjItMS4wMzgtMS41NDcgMC0yLjQ2NiAxLTIuODEyIDEuNTMtMi4yNjQgMy40NDQtNC4yNCA2Ljg0My01Ljk0NiAxMC4yMDhDMTguODEgOTguOTI0IDAgMTA4LjcgMCAxMTkuNjVjMCA5LjIzNyAxMy44NCAxNy4zOTQgMzQuOTA1IDIyLjI1NS4wMDMuMDAyLjAyMyAwIC4wMyAwIC4yNS4wNTguNTA0LjA5NS43Ny4wOTUgMS44NDYgMCAzLjM0LTEuNDcgMy4zNC0zLjI4IDAtMS40ODctMS4wMTctMi43My0yLjQtMy4xM2wtLjAxLS4wMjJjLTE1LjY0NS00LjU0LTI1LjI3LTEwLjc0NC0yNS4yNy0xNC44NTJ2LS4wMWMuMDE3LTQuMzUzIDEwLjY5My04LjMwNiAyNy41OC0xMC43ODcuMDYyLS4wMS4xMi0uMDIuMTgyLS4wMi43NzUgMCAxLjM2OC42MyAxLjM2OCAxLjM5IDAgLjExLS4wMi4yMy0uMDQ2LjMzbC4wMS4wMWMtLjg3IDMuNzEtMS40IDcuNDEtMS41OCAxMS4xMS0uMDUuOTMuMjkgMS44NS45NCAyLjUzLjY0LjY3IDEuNTQgMS4wNiAyLjQ4IDEuMDZoMjAuNzRjMS43OCAwIDMuMjgtMS40IDMuNDEtMy4xNy40NS02LjA3IDIuMzUtMTIuMTUgNS43OC0xOC41NCAxLjE5LTIuMjEuMjYtNC4yOS0uNDItNS4xOC0zLjQyLTQuNDMtNy41OS05LjE2LTEzLjgxLTE1LjY1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ny44NjggMzIuNTc4Yy44Mi43OTggMS43NS45NDcgMi4zOS45NDdoLjAwNmMuNjQyIDAgMS41Ny0uMTQ4IDIuMzktLjk0NiA3LjMxMy03LjExIDExLjI0Mi0xNS40IDEyLjEwMy0xNy43MS4xMjUtLjM0LjI1Mi0uNzMuMjUyLTEuMjYgMC0xLjg0LTEuNTQtMy4xNi0zLjE0LTMuMTYtMS4zMyAwLTUuMS4zOS0xMS41OS4zOWgtLjA1Yy02LjUgMC0xMC4yNy0uMzktMTEuNTktLjM5LTEuNjEgMC0zLjE0IDEuMzEtMy4xNCAzLjE1IDAgLjUzLjEzLjkyLjI1IDEuMjYuODYgMi4zIDQuNzkgMTAuNTkgMTIuMSAxNy43eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg%3D%3D)](http://wiki.openmrs.org)

It's best to ask your questions on [OpenMRS talk](https://talk.openmrs.org/tags/c/software/javascript).

## License

[MPL-2.0](http://openmrs.org/license/)
