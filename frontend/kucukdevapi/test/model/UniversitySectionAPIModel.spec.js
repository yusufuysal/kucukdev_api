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
    instance = new Kucukdevapi.UniversitySectionAPIModel();
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

  describe('UniversitySectionAPIModel', function() {
    it('should create an instance of UniversitySectionAPIModel', function() {
      // uncomment below and update the code to test UniversitySectionAPIModel
      //var instance = new Kucukdevapi.UniversitySectionAPIModel();
      //expect(instance).to.be.a(Kucukdevapi.UniversitySectionAPIModel);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Kucukdevapi.UniversitySectionAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property section (base name: "section")', function() {
      // uncomment below and update the code to test the property section
      //var instance = new Kucukdevapi.UniversitySectionAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property instructor (base name: "instructor")', function() {
      // uncomment below and update the code to test the property instructor
      //var instance = new Kucukdevapi.UniversitySectionAPIModel();
      //expect(instance).to.be();
    });

    it('should have the property slots (base name: "slots")', function() {
      // uncomment below and update the code to test the property slots
      //var instance = new Kucukdevapi.UniversitySectionAPIModel();
      //expect(instance).to.be();
    });

  });

}));