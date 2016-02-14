'use strict';

module.exports = AdminCtrl;

function AdminCtrl(currentUser) {
  const vm = this;
  
  vm.user = currentUser;
}
