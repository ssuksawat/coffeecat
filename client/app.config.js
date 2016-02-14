'use strict';

module.exports = function (app) {
  app
    .config(['$logProvider', AppConfig])
    .config(['$mdThemingProvider', AppTheme]);

  function AppConfig($logProvider) {
    $logProvider.debugEnabled(true);
  }

  function AppTheme($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('orange');
  }
};
