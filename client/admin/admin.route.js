'use strict';

module.exports = AdminRoute;

function AdminRoute($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'admin.html',
      controller: 'AdminCtrl',
      controllerAs: 'admin',
      resolve: {
        'currentUser': ['$state', 'authService', function ($state, authService) {
          return authService.getCurrentUser()
            .then(() => { return authService.requiresRole('ADMIN'); })
            .catch(() => $state.go('login'));
        }]
      }
    });
}
