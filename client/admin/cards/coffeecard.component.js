'use strict';

const angular = require('angular');

const CoffeeCard = {
  bindings: {
    model: '=',
    ingredientList: '=?',
    feelingList: '=?',
    onDelete: '&'
  },
  templateUrl: 'coffeecard.html',
  controller: ['$scope', '$log', 'Coffee', CoffeeCardCtrl]
};

function CoffeeCardCtrl($scope, $log, Coffee) {
  const vm = this;
  let orig = {};

  // Component Actions
  vm.delete = deleteSelf;
  vm.save = save;

  // Helpers
  vm.addIngredient = () => vm.model.ingredients.push({});
  vm.chipToString = ($chip) => $chip.name;
  vm.queryFeeling = queryFeeling;
  vm.toggleEdit = toggleEdit;

  /***** PUBLIC *****/

  function deleteSelf() {
    if (isNewObject()) { return vm.onDelete(); }
    vm.model.$delete()
      .then(() => $scope.$emit('delete:success'))
      .then(vm.onDelete)
      .catch(err => $log.error('Delete failed: ', err));
  }

  function save() {
    let promise;

    if (!isNewObject()) {
      // Update existing
      promise = vm.model.$update();
    } else {
      // Create new instance
      promise = Coffee.save(vm.model).$promise;
    }

    promise.then(_success).catch(err => $log.error('Save failed: ', err));

    function _success() {
      orig = {};
      vm.isEditing = false;
      $scope.$emit('update:success');
    }
  }

  function queryFeeling(query) {
    if (!query) { return []; }
    return vm.feelingList.filter((feeling) => {
      return feeling.name.includes(query.toLowerCase());
    });
  }

  function toggleEdit() {
    if (vm.isEditing) { // exit EDIT mode
      angular.copy(orig, vm.model);
    } else { // enter EDIT mode
      angular.copy(vm.model, orig);
    }
    vm.isEditing = !vm.isEditing;
  }

  /***** PRIVATE *****/

  function isNewObject() {
    return vm.model._id === undefined;
  }
}

module.exports = CoffeeCard;
