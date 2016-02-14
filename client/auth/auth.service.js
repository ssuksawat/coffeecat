'use strict';

module.exports = AuthService;

function AuthService($http, $q, $log) {

  let currentUser;

  return {
    authenticate,
    getCurrentUser,
    logout,
    requiresAuth,
    requiresRole
  };

  /***** PUBLIC *****/

  function authenticate(username, password) {
    return $http.post('/api/login', { username, password })
      .then(res => {
        $log.debug('login success: ', res);
        currentUser = res.data.user;
        return res;
      })
      .catch(err => {
        $log.error('login error: ', err);
        return $q.reject(err);
      });
  }

  function getCurrentUser() {
    return currentUser;
  }

  function logout() {
    return $http.post('/api/logout')
      .then(() => $log.debug('Logout success'))
      .catch(err => $log.error('Logout error: ', err));
  }

  function requiresAuth() {
    if (!currentUser) { return $q.reject('AUTH_REQUIRED'); }
    return $q.resolve(currentUser);
  }

  function requiresRole(role) {
    return this.requiresAuth().then(_checkRole);

    function _checkRole(user) {
      if (user.roles.indexOf(role) === -1) { return $q.reject('UNAUTHORIZED'); }
      return $q.resolve('OK');
    }
  }

}
