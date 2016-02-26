'use strict';

const angular = require('angular');

const CoffeeCard = {
  bindings: {
    model: '=',
    ingredientList: '=?',
    feelingList: '=?',
    onDelete: '&',
    onSave: '&'
  },
  templateUrl: 'coffeecard.html',
  controller: CoffeeCardCtrl
};

function CoffeeCardCtrl() {
  const vm = this;
  const orig = {};

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
    vm.isLoading = true;
    vm.onDelete({model: vm.model}).finally(() => vm.isLoading = false);
  }

  function save() {
    vm.isLoading = true;
    vm.onSave({model: vm.model})
      .then(() => angular.copy(vm.model, orig))
      .then(() => vm.isEditing = false)
      .finally(() => vm.isLoading = false);
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
}

module.exports = CoffeeCard;
