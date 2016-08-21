////app controller, puts data from the service into the scope for the view(html)
//app.controller('MainController', ['$scope', 'contacts', function($scope, contacts) {
//    contacts.success(function(data) {
//        $scope.items = data.products;
//    });
//}]);

/**
 * Form controller
 *
 * @authors Claire Wilgar <claire.wilgar@rehabstudio.com>
 */

/**
 * Module export of directive function
 *
 * @ngInject
 * @param  {angular.Service} apiService service
 * @return {angular.Directive}                   Directive definition object
 */

module.exports = function($scope, ApiService) {
//    contacts.success(function(data) {
//        $scope.items = data.products;
//    });
    this.items = [];
    this.sortBy = '';
    this.reverseSort = false;
    this.error = '';
    var self = this;

    console.log('controller loaded');

    ApiService.getItems()
        .then(function(data) {
            self.items = data.products;
        }, function(response) {
            self.error = response;
        });
};
