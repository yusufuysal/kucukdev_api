/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
    factory(root.expect, root.FastApi);
  }
}(this, function(expect, FastApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastApi.UsersApi();
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

  describe('UsersApi', function() {
    describe('createUser', function() {
      it('should call createUser successfully', function(done) {
        //uncomment below and update the code to test createUser
        //instance.createUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUser', function() {
      it('should call getCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getCurrentUser
        //instance.getCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSingleUser', function() {
      it('should call getSingleUser successfully', function(done) {
        //uncomment below and update the code to test getSingleUser
        //instance.getSingleUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCurrentSemester', function() {
      it('should call updateCurrentSemester successfully', function(done) {
        //uncomment below and update the code to test updateCurrentSemester
        //instance.updateCurrentSemester(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCurrentUniversity', function() {
      it('should call updateCurrentUniversity successfully', function(done) {
        //uncomment below and update the code to test updateCurrentUniversity
        //instance.updateCurrentUniversity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEntranceyear', function() {
      it('should call updateEntranceyear successfully', function(done) {
        //uncomment below and update the code to test updateEntranceyear
        //instance.updateEntranceyear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePassword', function() {
      it('should call updatePassword successfully', function(done) {
        //uncomment below and update the code to test updatePassword
        //instance.updatePassword(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));