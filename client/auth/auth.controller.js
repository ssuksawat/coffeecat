module.exports = AuthCtrl;

function AuthCtrl($state, authService) {
  var vm = this;

  vm.credentials = { username: '', password: '' };
  vm.error = '';
  vm.login = login;

  /***** PUBLIC *****/

  function login() {
    authService.authenticate(vm.credentials.username, vm.credentials.password)
      .then(() => $state.go('admin'))
      .catch(() => vm.error = 'WRONGGG! Try again...');
  }
}
