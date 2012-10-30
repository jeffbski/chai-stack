/*global require:false */

require(["mocha"], function () {
  'use strict';
  window.mocha.setup({
    ui: 'qunit',
    timeout: 2000
  });
  var testFiles = [
    "../test/stack.mocha"
  ];
  require(testFiles, function () {
    if (window.mochaPhantomJS) return window.mochaPhantomJS.run();
    var runner = window.mocha.run().on('end', function () {
      console.log('mocha finished');
    });
    //mocha.reporters.TAP(runner);
  }, function (err) {
    console.error('Error: requirejs failed to load module(s):', err.requireModules, err.toString());
  });
});

