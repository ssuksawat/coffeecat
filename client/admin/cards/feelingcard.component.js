'use strict';

const FeelingCard = {
  bindings: {
    model: '=',
    onDelete: '&'
  },
  templateUrl: 'feelingcard.html',
  controller: ['$scope', '$log', 'Feeling', FeelingCardCtrl]
};

function FeelingCardCtrl($scope, $log, Feeling) {
  const vm = this;

  // TODO: Refactor delete() & save() to a reusable service
  vm.delete = deleteSelf;
  vm.save = save;

  /***** PUBLIC *****/

  function deleteSelf() {
    if (isNewObject()) { return vm.onDelete(); }
    vm.isLoading = true;
    vm.model.$delete()
      .then(() => vm.isLoading = false)
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
      promise = Feeling.save(vm.model).$promise;
    }

    vm.isLoading = true;
    promise.then(_success).catch(err => $log.error('Save failed: ', err));

    function _success() {
      vm.isLoading = vm.isEditing = false;
      $scope.$emit('update:success');
    }
  }

  /***** PRIVATE *****/

  // TODO: Refactor out to reusable service
  function isNewObject() {
    return vm.model._id === undefined;
  }
}

module.exports = FeelingCard;
