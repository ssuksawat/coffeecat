const angular = require('angular');
const ngResource = require('angular-resource');
const ngMaterial = require('angular-material');
const uiRouter = require('ui-router');

const app = angular.module('coffeecat', [
  ngResource,
  uiRouter,
  ngMaterial
]);

require('./app.routes')(app);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['coffeecat']);
});
