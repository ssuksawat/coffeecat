const app = require('angular').module('coffeecat.auth', [
  /* HTML Templates */
  require('./login.html')
]);

const AuthRoute = require('./auth.route');
const AuthCtrl = require('./auth.controller');
const AuthService = require('./auth.service');

app.config(['$stateProvider', AuthRoute]);
app.controller('AuthCtrl', [ '$state', 'authService', AuthCtrl]);
app.factory('authService', [ '$http', '$q', '$log', AuthService]);

module.exports = app.name;
