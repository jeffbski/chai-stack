/*global define:true */

if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['chai'], function (chai) {
  chai.Assertion.includeStack = true;
  return chai;
});