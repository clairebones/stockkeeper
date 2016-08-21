//var app = angular.module('ListApp', []);
module.exports = angular.module('ListApp', ['ngMaterial',
                                           'ngAria',
                                           'ngMessages']);

module.exports.config(require('./config'));

module.exports.controller('ListController', require('./listController'));
module.exports.service('ApiService', require('./apiService'));
module.exports.directive('tableRowDirective', require('./tableRowDirective'));

//service, pulls data from the json api
//module.exports.service('ApiService', ['$http', function($http) {
//    return $http.get('https://dl.dropboxusercontent.com/u/21064600/data.json')
//    	.success(function(data) {
//        	return data;
//    	})
//    	.error(function(err) {
//        	return err;
//    	});
//}]);