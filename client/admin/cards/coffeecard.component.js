'use strict';

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

  // Component Actions
  vm.delete = deleteSelf;
  vm.save = save;

  // Helpers
  vm.addIngredient = () => vm.model.ingredients.push({});
  vm.chipToString = ($chip) => $chip.name;
  vm.queryFeeling = queryFeeling;

  /***** PUBLIC *****/

  function deleteSelf() {
    vm.isLoading = true;
    vm.onDelete().finally(() => vm.isLoading = false);
  }

  function save() {
    vm.isLoading = true;
    vm.onSave()
    .then(() => vm.coffeeForm.$setPristine(true))
    .finally(() => vm.isLoading = false);
  }

  function queryFeeling(query) {
    if (!query) { return []; }
    return vm.feelingList.filter((feeling) => {
      return feeling.name.includes(query.toLowerCase());
    });
  }
}

module.exports = CoffeeCard;
