'use strict';

module.exports = AdminCtrl;

function AdminCtrl($scope, $mdToast, currentUser, Coffee, Feeling, Ingredient) {
  const vm = this;

  init();

  vm.user = currentUser;
  vm.addCoffee = () => vm.coffeeList.unshift({name: 'NEW Coffee - Edit Me!', ingredients: [], feelings: []});
  vm.addFeeling = () => vm.feelingList.unshift({name: 'NEW Feeling - Edit Me!'});
  vm.addIngredient = () => vm.ingredientList.unshift({name: 'NEW Ingredient - Edit Me!', months: []});

  /***** EVENT LISTENERS *****/

  $scope.$on('update:success', (evt) => {
    evt.stopPropagation();
    $mdToast.show($mdToast.simple().textContent('Update Success!'));
  });
  $scope.$on('delete:success', (evt) => {
    evt.stopPropagation();
    $mdToast.show($mdToast.simple().textContent('Delete Success!'));
  });
  $scope.$on('error', (evt, reason) => {
    evt.stopPropagation();
    $mdToast.show($mdToast.simple().textContent('Error! ' + reason));
  });

  /***** PRIVATE *****/

  function init() {
    vm.coffeeList = Coffee.query();
    vm.feelingList = Feeling.query();
    vm.ingredientList = Ingredient.query();
  }
}
