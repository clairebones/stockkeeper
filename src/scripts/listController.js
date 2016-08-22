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

module.exports = function($scope, ApiService, $mdDialog) {
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

    self.addStock = function(event) {
        $mdDialog.show({
            controller: 'FormController as form',
            template: require('../templates/stockForm.html'),
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            locals: {
                item: null
            }
        })
        .then(function(data) {
            self.items.push(data);
        }, function() {
            console.log('Stock add cancelled');
        });
    };

    self.editStockItem = function(event, item) {
        $mdDialog.show({
            controller: 'FormController as form',
            template: require('../templates/stockForm.html'),
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            locals: {
                item: item
            }
        })
        .then(function(data) {
            self.items.push(data);
        }, function() {
            console.log('Editing cancelled');
        });
    };

    self.deleteStockItem = function(ev, item) {
        $mdDialog.show({
            controller: 'DeleteController as del',
            template: require('../templates/deleteDialog.html'),
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            locals: {
                item: item
            }
        }).then(function(item) {
            var index = self.items.indexOf(item);

            self.items.splice(index, 1);
        }, function() {
            console.log('Delete cancelled');
        });
    };
};
