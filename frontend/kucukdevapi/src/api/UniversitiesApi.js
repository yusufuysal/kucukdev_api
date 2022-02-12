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


import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import Message from '../model/Message';
import MessageCreate from '../model/MessageCreate';
import UniversityAPIModel from '../model/UniversityAPIModel';
import UniversityModel from '../model/UniversityModel';
import UniversitySemesterModel from '../model/UniversitySemesterModel';
import UpdateSemesterModel from '../model/UpdateSemesterModel';
import UpdateUniversityNameModel from '../model/UpdateUniversityNameModel';

/**
* Universities service.
* @module api/UniversitiesApi
* @version 1.0.0
*/
export default class UniversitiesApi {

    /**
    * Constructs a new UniversitiesApi. 
    * @alias module:api/UniversitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUniversity operation.
     * @callback module:api/UniversitiesApi~createUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageCreate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create University
     * Create a university
     * @param {module:model/UniversityModel} universityModel 
     * @param {module:api/UniversitiesApi~createUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageCreate}
     */
    createUniversity(universityModel, callback) {
      let postBody = universityModel;
      // verify the required parameter 'universityModel' is set
      if (universityModel === undefined || universityModel === null) {
        throw new Error("Missing the required parameter 'universityModel' when calling createUniversity");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MessageCreate;
      return this.apiClient.callApi(
        '/universities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUniversity operation.
     * @callback module:api/UniversitiesApi~deleteUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Message} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete University
     * Delete a university with given universityID
     * @param {String} unid 
     * @param {module:api/UniversitiesApi~deleteUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Message}
     */
    deleteUniversity(unid, callback) {
      let postBody = null;
      // verify the required parameter 'unid' is set
      if (unid === undefined || unid === null) {
        throw new Error("Missing the required parameter 'unid' when calling deleteUniversity");
      }

      let pathParams = {
        'unid': unid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/universities/{unid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentUniversitySemester operation.
     * @callback module:api/UniversitiesApi~getCurrentUniversitySemesterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversitySemesterModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show University Current Semester
     * Get current semester of a university with given universityID
     * @param {String} unid 
     * @param {module:api/UniversitiesApi~getCurrentUniversitySemesterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversitySemesterModel}
     */
    getCurrentUniversitySemester(unid, callback) {
      let postBody = null;
      // verify the required parameter 'unid' is set
      if (unid === undefined || unid === null) {
        throw new Error("Missing the required parameter 'unid' when calling getCurrentUniversitySemester");
      }

      let pathParams = {
        'unid': unid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UniversitySemesterModel;
      return this.apiClient.callApi(
        '/universities/{unid}/current-semester', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSingleUniversity operation.
     * @callback module:api/UniversitiesApi~getSingleUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversityAPIModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show University
     * Get a single university with given universityID
     * @param {String} unid 
     * @param {module:api/UniversitiesApi~getSingleUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversityAPIModel}
     */
    getSingleUniversity(unid, callback) {
      let postBody = null;
      // verify the required parameter 'unid' is set
      if (unid === undefined || unid === null) {
        throw new Error("Missing the required parameter 'unid' when calling getSingleUniversity");
      }

      let pathParams = {
        'unid': unid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UniversityAPIModel;
      return this.apiClient.callApi(
        '/universities/{unid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listUniversities operation.
     * @callback module:api/UniversitiesApi~listUniversitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UniversityAPIModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Universities
     * list all universities
     * @param {module:api/UniversitiesApi~listUniversitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UniversityAPIModel>}
     */
    listUniversities(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [UniversityAPIModel];
      return this.apiClient.callApi(
        '/universities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUniversityCurrentSemester operation.
     * @callback module:api/UniversitiesApi~updateUniversityCurrentSemesterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Message} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update University Current Semester
     * Update current semester of a university with given universityID
     * @param {String} unid 
     * @param {module:model/UpdateSemesterModel} updateSemesterModel 
     * @param {module:api/UniversitiesApi~updateUniversityCurrentSemesterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Message}
     */
    updateUniversityCurrentSemester(unid, updateSemesterModel, callback) {
      let postBody = updateSemesterModel;
      // verify the required parameter 'unid' is set
      if (unid === undefined || unid === null) {
        throw new Error("Missing the required parameter 'unid' when calling updateUniversityCurrentSemester");
      }
      // verify the required parameter 'updateSemesterModel' is set
      if (updateSemesterModel === undefined || updateSemesterModel === null) {
        throw new Error("Missing the required parameter 'updateSemesterModel' when calling updateUniversityCurrentSemester");
      }

      let pathParams = {
        'unid': unid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/universities/{unid}/current-semester', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUniversityName operation.
     * @callback module:api/UniversitiesApi~updateUniversityNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Message} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update University Name
     * Update name of a university with given universityID
     * @param {String} unid 
     * @param {module:model/UpdateUniversityNameModel} updateUniversityNameModel 
     * @param {module:api/UniversitiesApi~updateUniversityNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Message}
     */
    updateUniversityName(unid, updateUniversityNameModel, callback) {
      let postBody = updateUniversityNameModel;
      // verify the required parameter 'unid' is set
      if (unid === undefined || unid === null) {
        throw new Error("Missing the required parameter 'unid' when calling updateUniversityName");
      }
      // verify the required parameter 'updateUniversityNameModel' is set
      if (updateUniversityNameModel === undefined || updateUniversityNameModel === null) {
        throw new Error("Missing the required parameter 'updateUniversityNameModel' when calling updateUniversityName");
      }

      let pathParams = {
        'unid': unid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Message;
      return this.apiClient.callApi(
        '/universities/{unid}/update-name', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
