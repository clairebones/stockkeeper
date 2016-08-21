
module.exports = angular.module('ListApp', ['ngMaterial',
                                           'ngAria',
                                           'ngMessages']);

module.exports.config(require('./config'));

module.exports.controller('ListController', require('./listController'));
module.exports.service('ApiService', require('./apiService'));
module.exports.directive('tableRowDirective', require('./tableRowDirective'));
