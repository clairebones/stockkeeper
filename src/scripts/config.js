/**
 * General configuration for Angular/Angular Material
 *
 * Top level features
 *     - Change Angular interpolation markup, e.g. {{ 2+2 }} to be {[ 2+2 ]}, so
 *     that it works better with Jinja templates.
 *     - Configure Material design theme
 *
 *
 * @author Claire Wilgar
 */

/**
 * Angular config function
 *
 * @ngInject
 *
 * @param  {angular.Provider} $interpolateProvider Provider that allows for
 *                                                 configuration of the
 *                                                 interpolation markup
 * @param  {angular.Provider} $mdThemingProvider Provider that allows for
 *                                                 configuration of Angular
 *                                                 material themes
 */
module.exports = function($interpolateProvider, $mdThemingProvider) {

    // Configure interpolation braces
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');

    var primary = $mdThemingProvider.extendPalette('purple', {
        '500': '663854', // Default
        '600': '86608E'  // Hover
    });

    var secondary = $mdThemingProvider.extendPalette('grey', {
        '500': 'ffffff', // Default
        '600': 'fafafa'  // Hover
    });

    $mdThemingProvider.definePalette('primary', primary);
    $mdThemingProvider.definePalette('secondary', secondary);

    $mdThemingProvider.theme('default')
        .primaryPalette('primary')
        .accentPalette('secondary');

};
