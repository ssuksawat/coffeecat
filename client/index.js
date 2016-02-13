'use strict';

const angular = require('angular');
const ngResource = require('angular-resource');
const ngMaterial = require('angular-material');
const uiRouter = require('ui-router');

const app = angular.module('coffeecat', [
  /* Dependencies */
  ngResource,
  uiRouter,
  ngMaterial,

  /* Components */
  require('./auth')
]);

/* App Config */
require('./app.config')(app);
require('./app.routes')(app);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['coffeecat']);
});
