/**
 * Form API service - posts the contact form and returns status and data
 * Currently the GET request works but the POST requests that would be used
 * are replaced with simple promises as there is no server currently set up.
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

    var postSuccess = true; //fake success indicator, would be sent from server
    var response = ''; //fake response in case of error, would be sent from server

    /*send API POST request here*/

    if (postSuccess) {
        /* if the post is successful: */
        /* resolve the promise and confirm the data
        /* by sending it back */
        defer.resolve(data);
    } else {
        /* if the post was not successful: */
        /* reject the promise and send an error message */
        defer.reject(response);
    }
    /* if not successful */
    return defer.promise;

};

/**
* Function to post the form data of a delete request and return a promise based on success or fail/bad data
* @param {object} data - form data
* @return {object} or {promise}
*/
apiService.prototype.deleteItem = function(data) {
    var defer = this.$q.defer();

    var postSuccess = true; //fake success indicator, would be sent from server
    var response = ''; //fake response in case of error, would be sent from server

    /*send API POST request here*/

    if (postSuccess) {
        /* if the post is successful: */
        /* resolve the promise and confirm the data
        /* by sending it back */
        defer.resolve(data);
    } else {
        /* if the post was not successful: */
        /* reject the promise and send an error message */
        defer.reject(response);
    }
    /* if not successful */
    return defer.promise;
};

/**
* Function to get the stock data and return a promise based on success or fail
* @param {object} data - form data
* @return {object} or {promise}
*/
apiService.prototype.getItems = function() {
    var defer = this.$q.defer();

    /* Currently get data from stored JSON file as no server is set up */
    this.$http({
        url: 'https://dl.dropboxusercontent.com/u/21064600/data.json',
        method: 'GET'
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
