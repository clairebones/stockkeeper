/**
 * Form API service - posts the contact form and returns status and data
 *
 * @author Claire Wilgar <claire.wilgar@rehabstudio.com>
 */

/**
 * Basic constructor function
 *
 * @ngInject
 * @constructor
 * @param  {angular.Service} $http                  angular http service
 * @param  {angular.Service} $q                     angular promise library
 * @param  {angular.Service} $httpParamSerializer   angular parameter serialization service
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
        url: '',
        method: 'POST',
        data: this.$httpParamSerializer(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).success(function(response) {
        if (angular.equals(response.result, 'accepted')) {
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
        method: 'GET'
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
