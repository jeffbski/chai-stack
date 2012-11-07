# chai-stack

Light wrapper around chaijs which automatically sets chai.Assertion.includeStack = true

## Reason for this module

By default, Chai does not show stack traces upon an AssertionError. This can be changed by modifying the includeStack parameter for chai.Assertion. (See http://chaijs.com/guide/styles/#configure-section)

For example:

```javascript
var chai = require('chai');
chai.Assertion.includeStack = true; // defaults to false
```

Since the default chai configuration does not include stack traces since they can add lots of noise, but I prefer to have them on. Rather than taking the extra step to configure after each use or creating a special require to use with mocha, this module simply has a dependency on chaijs and after requiring it sets includeStack configuration variable to true before returning chai.

The result is that by requiring chai-stack, I always get the chai returned configured with includeStack true.

## Installation/Usage

You can just require chai-stack and it will use the latest version of chai, but to have more fine grained control over what version of chai you are using and to make it more visible, it is recommended that you install chai first and then chai-stack.

### Server

```bash
npm install chai  # by doing this you can control the version of chai directly
npm install chai-stack  # now it will just use the chai that is there already
```

and add it to your package.json devDependencies using a `*` as the version tag so you get the latest version when you install. Or for more fine grained control, specify a version you want to use.

Note: you need to remove the `// comments` from the lines below to be valid json

```json
devDependencies: {
  "chai": "*",        // or for more fine grained control, specify
  "chai-stack": "*",  // it will use whatever version of chai is already installed
  "mocha": "*"        // or for more fine grained control, specify
}
```

To use just require it like you would for `chai`, substituting `chai-stack`

```javascript
var chai = require('chai-stack');
```


### Browser

Download version of chai you want to use and lib/chai-stack.js and include it using AMD

```html
require.config({
  paths: {
    chai: 'http://chaijs.com/chai', // or could specify a specific version or local path
    "chai-stack": '../lib/chai-stack',
    mocha: '../node_modules/mocha/mocha'
  }
});
require(['chai-stack'], function (chai) {
  // chai is loaded and ready to use, includeStack is already true
});
```

