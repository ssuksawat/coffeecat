'use strict';

const IngredientCard = {
  bindings: {
    model: '=',
    onDelete: '&',
    onSave: '&'
  },
  templateUrl: 'ingredientcard.html',
  controller: IngredientCardCtrl
};

function IngredientCardCtrl() {
  const vm = this;

  vm.delete = deleteSelf;
  vm.save = save;

  vm.queryMonths = queryMonths;
  vm.transformToUpper = ($chip) => $chip.toUpperCase();

  /***** PUBLIC *****/

  function deleteSelf() {
    vm.isLoading = true;
    vm.onDelete().finally(() => vm.isLoading = false);
  }

  function save() {
    vm.isLoading = true;
    vm.onSave()
      .then(() => vm.ingredientForm.$setPristine(true))
      .finally(() => vm.isLoading = false);
  }

  function queryMonths(query) {
    if (!query) { return []; }
    var months = ['ALL', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'OCT', 'NOV', 'DEC'];
    return months.filter(month => month.includes(query.toUpperCase()));
  }

}

module.exports = IngredientCard;
