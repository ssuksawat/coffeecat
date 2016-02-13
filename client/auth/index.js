const app = require('angular').module('coffeecat.auth', [
  /* HTML Templates */
  require('./login.html').name
]);

const AuthRoute = require('./auth.route');
const AuthCtrl = require('./auth.controller');
const AuthService = require('./auth.service');

app.config(['$stateProvider', AuthRoute]);
app.controller('AuthCtrl', [ '$state', 'authService', AuthCtrl]);
app.factory('authService', [ '$http', '$q', AuthService]);

module.exports = app.name;
