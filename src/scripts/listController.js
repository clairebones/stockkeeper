/**
 * List controller
 *
 * @authors Claire Wilgar <cwilgar@gmail.com>
 */

/**
 * Module export of controller function
 *
 * @ngInject
 * @param  {angular.Service} apiService service
 * @return {angular.Directive}                   Directive definition object
 */

module.exports = function($scope, ApiService, $mdDialog) {

    //store item list, spt options and potential errors
    this.items = [];
    this.sortBy = '';
    this.reverseSort = false;
    this.error = '';
    var self = this; //allows the 'this' object to be reached inside inner functions and loops

    //On load of the controller, call the API service to send a get request, and store the
    // results as products or grab the error if failed
    ApiService.getItems()
        .then(function(data) {
            self.items = data.products;
        }, function(response) {
            self.error = response;
        });

    // When the user clicks the button to add stock, open a dialog box with it's own controller
    // and template, and pass in null as no item is being edited
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
            //if the dialog is closed as 'hide' i.e. success, update the item array with the provided data
            self.items.push(data);
        }, function() {
            //if the dialog is closed as 'cancel', log as such in the console and do nothing else
            console.log('Stock add cancelled');
        });
    };

    // When the user clicks the button to edit stock, open a dialog box with it's own controller
    // and template, and pass in the item from that row, to be edited
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
        //if the dialog is closed as 'hide' i.e. success, update the item array with the provided data
        .then(function(data) {
            self.items.push(data);
        }, function() {
            //if the dialog is closed as 'cancel', log as such in the console and do nothing else
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
            //if the dialog is closed as 'hide' i.e. success, remove the specified item from the array
        }).then(function(item) {
            var index = self.items.indexOf(item);

            self.items.splice(index, 1);
        }, function() {
            //if the dialog is closed as 'cancel', log as such in the console and do nothing else
            console.log('Delete cancelled');
        });
    };
};
