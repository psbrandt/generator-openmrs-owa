<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

# <%= appName %>

This repository contains the <%= appName %> OpenMRS Open Web App.

> Add a description of what your app does here.

For further documentation about OpenMRS Open Web Apps see
[the wiki page](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module).

## Development

### Production Build

You will need NodeJS 4+ installed to do this. See the install instructions
[here](https://nodejs.org/en/download/package-manager/).

Once you have NodeJS installed, you need to install Gulp and Bower (first time
  only) as follows:
````
npm install -g gulp bower
````

Install the dependencies (first time only):

```
npm install && bower install
```
Build the distributable using [Gulp](http://gulpjs.com/) as follows:

````
gulp
````

This will create a file called `<%= appId %>.zip` file in the `dist` directory,
which can be uploaded to the OpenMRS Open Web Apps module.

### Local Deploy

To deploy directly to your local Open Web Apps directory, run:

````
gulp deploy-local
````

This will build and deploy the app to the `<%= localDeployDirectory %>`
directory. To change the deploy directory, edit the `LOCAL_OWA_FOLDER` entry in
`config.json`. If this file does not exists, create one in the root directory
that looks like:

```js
{
  "LOCAL_OWA_FOLDER": "<%= localDeployDirectory %>"
}
```

### Live Reload

To use [Browersync](https://www.browsersync.io/) to watch your files and reload
the page, inject CSS or synchronize user actions across browser instances, you
will need the `APP_ENTRY_POINT` entry in your `config.json` file:

```js
{
  "LOCAL_OWA_FOLDER": "<%= localDeployDirectory %>",
  "APP_ENTRY_POINT": "<%= appEntryPoint %>"
}
```
Run Browsersync as follows:

```
gulp watch
```

### Extending

Install [Bower](http://bower.io/) packages dependencies as follows:

````
bower install --save <package>
````

Be sure to include the following in your `html` files at the position you want
the Bower dependencies injected:

````
<!-- bower:js -->
<!-- endbower -->
````
Do the same for your Bower stylesheet dependencies, but replace `js` with `css`.

Any files that you add manually must be added in the `app` directory.

### Troubleshooting

##### [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

You may experience problems due to the `Access-Control-Allow-Origin` header not
being set by OpenMRS. To fix this you'll need to enable Cross-Origin Resource
Sharing in Tomcat.

See instructions [here](http://enable-cors.org/server_tomcat.html) for Tomcat 7 and [here](https://www.dforge.net/2013/09/16/enabling-cors-on-apache-tomcat-6/) for Tomcat 6.

## License

[MPL 2.0 w/ HD](http://openmrs.org/license/)
