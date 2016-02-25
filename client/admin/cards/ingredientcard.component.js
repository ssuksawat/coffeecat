'use strict';

const IngredientCard = {
  bindings: {
    model: '=',
    onDelete: '&'
  },
  templateUrl: 'ingredientcard.html',
  controller: ['$scope', '$log', 'Ingredient', IngredientCardCtrl]
};

function IngredientCardCtrl($scope, $log, Ingredient) {
  const vm = this;

  // TODO: Refactor delete() & save() to a reusable service
  vm.delete = deleteSelf;
  vm.save = save;

  vm.queryMonths = queryMonths;
  vm.transformToUpper = ($chip) => $chip.toUpperCase();

  /***** PUBLIC *****/

  function deleteSelf() {
    if (isNewObject()) { return vm.onDelete(); }
    vm.isLoading = true;
    vm.model.$delete()
      .then(() => $scope.$emit('delete:success'))
      .then(vm.onDelete)
      .catch(err => {
        $scope.$emit('error');
        $log.error('Delete failed: ', err);
      })
      .finally(() => vm.isLoading = false);
  }

  function save() {
    let promise;

    if (!isNewObject()) {
      // Update existing
      promise = vm.model.$update();
    } else {
      // Create new instance
      promise = Ingredient.save(vm.model).$promise;
    }

    vm.isLoading = true;
    promise
      .then(_success)
      .catch(err => {
        $scope.$emit('error');
        $log.error('Save failed: ', err);
      })
      .finally(() => vm.isLoading = false);

    function _success() {
      vm.isEditing = false;
      $scope.$emit('update:success');
    }
  }

  function queryMonths(query) {
    if (!query) { return []; }
    var months = ['ALL', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'OCT', 'NOV', 'DEC'];
    return months.filter(month => month.includes(query.toUpperCase()));
  }

  /***** PRIVATE *****/

  // TODO: Refactor out to reusable service
  function isNewObject() {
    return vm.model._id === undefined;
  }
}

module.exports = IngredientCard;
