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

## Installation

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

### Browser

Download chai-stack.js and include it with script tag or using AMD

```html
<script src="chai-stack.js" type="text/javascript"></script>
<!-- window.chai ready to use, includeStack is true -->
```

OR if using AMD

```html
require(['./chai-stack'], function (chai) {
  // use chai as normal, includeStack already true
});
```

## Usage

Just require it like you would for `chai`, substituting `chai-stack`

### CommonJS style

```javascript
var chai = require('./chai-stack');
```

### AMD style

```javascript
require(['./chai-stack'], function (chai) {
  // use chai as normal, includeStack already true
});
```
