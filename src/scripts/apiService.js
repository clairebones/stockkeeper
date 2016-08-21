/**
 * Form API service - posts the contact form and returns status and data
 *
 * @author Claire Wilgar <claire.wilgar@rehabstudio.com>
 */
'use strict';

/**
 * Basic constructor function
 *
 * @ngInject
 * @constructor
 */
var apiService = function($http, $q, $httpParamSerializer) {
    this.$http = $http;
    this.$q = $q;
    this.$httpParamSerializer = $httpParamSerializer;
};

/**
* Function to post the form data and return a promise based on success or fail/bad data
* @param {object} data - form data
* @return {object} or {promise}
*/
apiService.prototype.submitForm = function(data) {
    var defer = this.$q.defer();

    this.$http({
        url: 'https://services.google.com/fb/submissions/039324abe17a11e5b860b33297739e96/',
        method: 'POST',
        data: this.$httpParamSerializer(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).success(function(response) {
        if(angular.equals(response.result, 'accepted')) {
                defer.resolve(response);
        } else {
                defer.reject(response);
        }  
    }).error(defer.reject);
    
    return defer.promise;

};

apiService.prototype.getItems = function() {
    var defer = this.$q.defer();

    this.$http({
        url: 'https://dl.dropboxusercontent.com/u/21064600/data.json',
        method: 'GET',
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        }
    }).success(function(response) {
        console.log(response);
        defer.resolve(response);
    }).error(defer.reject);
    
    return defer.promise;
};

/**
 * Export function to be used as Angular service.
 * @type {Function|angular.Service}
 */
module.exports = apiService;
