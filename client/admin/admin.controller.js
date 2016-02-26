'use strict';

module.exports = AdminCtrl;

function AdminCtrl($scope, $q, $log, $mdToast, currentUser, Coffee, Feeling, Ingredient) {
  const vm = this;

  init();

  vm.user = currentUser;
  vm.addCoffee = () => vm.coffeeList.unshift(new Coffee({name: 'NEW Coffee - Edit Me!', ingredients: [], feelings: []}));
  vm.addFeeling = () => vm.feelingList.unshift(new Feeling({name: 'NEW Feeling - Edit Me!'}));
  vm.addIngredient = () => vm.ingredientList.unshift(new Ingredient({name: 'NEW Ingredient - Edit Me!', months: []}));
  vm.deleteItem = deleteItem;
  vm.saveItem = saveItem;

  /***** PUBLIC *****/

  function deleteItem(model, index) {
    if (!model) { return $q.reject(); }
    if (!model._id) { return _deleteSuccess(); }

    return model.$delete()
      .then(_deleteSuccess)
      .catch(_deleteError);

      function _deleteSuccess() {
        $mdToast.show($mdToast.simple().textContent('Delete Success!'));
        if (model instanceof Coffee) { vm.coffeeList.splice(index, 1); }
        else if (model instanceof Feeling) { vm.feelingList.splice(index, 1); }
        else if (model instanceof Ingredient) { vm.ingredientList.splice(index, 1); }
        return $q.resolve();
      }

      function _deleteError(err) {
        $mdToast.show($mdToast.simple().textContent('Oops! Something went wrong...'));
        $log.error('Delete failed: ', err);
        return $q.reject();
      }
  }

  function saveItem(model) {
    if (!model) { return $q.reject(); }

    let promise;
    model.name = model.name.toLowerCase(); //lowercase all for consistency
    if (model._id) {
      // Update existing
      promise = model.$update();
    } else {
      // Save new instance
      promise = model.$save();
    }

    return promise
      .then(() => {
        $mdToast.show($mdToast.simple().textContent('Update Success!'));
      })
      .catch(err => {
        $mdToast.show($mdToast.simple().textContent('Oops! Something went wrong...'));
        $log.error('Save failed: ', err);
        return $q.reject();
      });
  }

  /***** PRIVATE *****/

  function init() {
    vm.coffeeList = Coffee.query();
    vm.feelingList = Feeling.query();
    vm.ingredientList = Ingredient.query();
  }
}
