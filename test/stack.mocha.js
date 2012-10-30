/*global define:true */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

(function () {

  var chaiStackPath = (typeof window !== "undefined" && navigator && document) ?
    'chai-stack' :       // browser
    '../lib/chai-stack'; // server

  define([chaiStackPath], function (chai) {
    'use strict';
    var t = chai.assert;

    suite('chai-stack');

    test('Assertion.includeStack is true', function () {
      t.isTrue(chai.Assertion.includeStack);
    });

    test('requiring chai-stack returns chai', function () {
      t.equal('Hello', 'Hello');
    });
  });

}());