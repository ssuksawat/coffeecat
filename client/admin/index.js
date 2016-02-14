'use strict';

const app = require('angular').module('coffeecat.admin', [
  /* Dependencies */
  'coffeecat.auth',

  /* HTML Templates */
  require('./admin.html').name
]);

const AdminRoute = require('./admin.route');
const AdminCtrl = require('./admin.controller');

app.config(['$stateProvider', AdminRoute]);
app.controller('AdminCtrl', ['currentUser', AdminCtrl]);

module.exports = app.name;
