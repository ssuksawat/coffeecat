'use strict';

module.exports = function (app) {
  app.config(['$logProvider', AppConfig]);

  function AppConfig($logProvider) {
    $logProvider.debugEnabled(true);
  }
};
