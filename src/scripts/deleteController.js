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

    var self = this;

    self.item = item;
    console.log(item);

    self.hide = function() {
        $mdDialog.hide();
    };

    self.cancel = function() {
        $mdDialog.cancel();
    };

    self.deleteItem = function(data) {
        ApiService.deleteItem(data)
            .then(function() {
                $mdDialog.hide(data);
            }, function(response) {
                $mdDialog.cancel(response);
            });
    };
};
