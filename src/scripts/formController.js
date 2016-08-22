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

    if (!angular.isUndefined(self.item.available)) {
        console.log(self.item.available);
        self.item.available = new Date(self.item.available);
    }

    self.hide = function() {
        $mdDialog.hide();
    };

    self.cancel = function() {
        $mdDialog.cancel();
    };

    self.submitForm = function(data) {
        ApiService.submitForm(data)
            .then(function() {
                $mdDialog.hide(data);
            }, function(response) {
                $mdDialog.cancel(response);
            });
    };
};
