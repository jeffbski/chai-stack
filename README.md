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

### Server

```bash
npm install chai-stack
```

and add it to your package.json devDependencies using a `*` as the version tag so you get the latest version when you install.

```json
devDependencies: {
  "chai": "*",
  "mocha": "*" // our preference, but you can use any test runner you like
}
```

To use just require it like you would for `chai`, substituting `chai-stack`

```javascript
var chai = require('chai-stack');
```


### Browser

Download dist/chai-stack.min.js and include it using AMD

```html
require(['chai-stack'], function (chai) {
  // chai is loaded and ready to use, includeStack is already true
});
```

