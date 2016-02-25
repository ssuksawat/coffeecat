'use strict';

module.exports = function (app) {
  app
    .config(['$logProvider', AppConfig])
    .config(['$mdThemingProvider', AppTheme])
    .run(['$mdMedia', '$rootScope', AppRun]);

  function AppConfig($logProvider) {
    $logProvider.debugEnabled(true);
  }

  function AppTheme($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('deep-orange');
  }

  function AppRun($mdMedia, $rootScope) {
    $rootScope.$mdMedia = $mdMedia;
  }
};
