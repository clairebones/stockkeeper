/**
 * Controller to bring functionality for the modal.
 *
 * @author Claire Wilgar
 */

/**
 * Module export of controller function.
 *
 * @ngInject
 * @param {angular.Service} $scope
 * @param {angular.Service} $mdDialog
 * @param {service} ApiService
 * @param {var} item
 */
module.exports = function($scope, $mdDialog, ApiService, item) {

    // Allow use of 'this' object inside inner functions and loops
    var self = this;

    self.item = item;

    self.hide = function() {
        $mdDialog.hide();
    };

    self.cancel = function() {
        $mdDialog.cancel();
    };

    self.deleteItem = function(data) {
        // If the delete button is clicked, send the delete POST request to the server using the API
        // service and handle the response
        ApiService.deleteItem(data)
            .then(function() {
                $mdDialog.hide(data);
            }, function(response) {
                $mdDialog.cancel(response);
            });
    };
};
