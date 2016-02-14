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
        'currentUser': ['authService', function (authService) {
          return authService.getCurrentUser();
        }],
        'isAdmin': ['$state', 'authService', function ($state, authService) {
          return authService.requiresRole('ADMIN')
            .catch(() => $state.go('login'));
        }]
      }
    });
}
