/**
 * kucukdevapi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kucukdevapi);
  }
}(this, function(expect, Kucukdevapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Kucukdevapi.UniversitySlotModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UniversitySlotModel', function() {
    it('should create an instance of UniversitySlotModel', function() {
      // uncomment below and update the code to test UniversitySlotModel
      //var instance = new Kucukdevapi.UniversitySlotModel();
      //expect(instance).to.be.a(Kucukdevapi.UniversitySlotModel);
    });

    it('should have the property day (base name: "day")', function() {
      // uncomment below and update the code to test the property day
      //var instance = new Kucukdevapi.UniversitySlotModel();
      //expect(instance).to.be();
    });

    it('should have the property hour (base name: "hour")', function() {
      // uncomment below and update the code to test the property hour
      //var instance = new Kucukdevapi.UniversitySlotModel();
      //expect(instance).to.be();
    });

    it('should have the property isLab (base name: "isLab")', function() {
      // uncomment below and update the code to test the property isLab
      //var instance = new Kucukdevapi.UniversitySlotModel();
      //expect(instance).to.be();
    });

  });

}));
