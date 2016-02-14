module.exports = AuthRoute;

function AuthRoute($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    })
    .state('logout', {
      url: '/logout',
      resolve: {
        'logout': ['$state', 'authService', function($state, authService) {
          return authService.logout().then(() => $state.go('login'));
        }]
      }
    });
}
