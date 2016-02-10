module.exports = AuthService;

function AuthService($http, $q) {

  return {
    authenticate,
    currentUser,
    isAuthenticated,
    logout
  };

  /***** PUBLIC *****/

  function authenticate(username, password) {
    return $http.post('/api/login', { username, password })
      .then(res => {
        console.log('login success: ', res);
        return res;
      })
      .catch(err => {
        console.log('login error: ', err);
        return $q.reject(err);
      });
  }

  function currentUser() {

  }

  function isAuthenticated() {

  }

  function logout() {
    
  }

}
