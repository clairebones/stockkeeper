/**
 * Table row directive
 *
 * @author Claire Wilgar <cwilgar@gmail.com>
 */
'use strict';
/**
 * Module export of directive function
 * Directive is an element which renders a row of data into a table
 *
 * @ngInject
 * @return {angular.Directive}
 */

module.exports = function() {
    return {
        restrict: 'A',
        scope: '@item',
        template: require('../templates/rowTemplate.html'),
        link: function(scope, elem, attrs, ctrl) {
            console.log('row', scope.item);
        }
    };
};
