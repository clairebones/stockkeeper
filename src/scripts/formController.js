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

    if (!angular.isUndefined(self.item) && self.item != null) {
        //if editing an existing item, format the date to allow the datepicker to show it
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
        //if the form is submitted send the data to the server through the api service and manage the response
        ApiService.submitForm(data)
            .then(function() {
                $mdDialog.hide(data);
            }, function(response) {
                $mdDialog.cancel(response);
            });
    };
};
