'use strict';

const FeelingCard = {
  bindings: {
    model: '=',
    onDelete: '&',
    onSave: '&'
  },
  templateUrl: 'feelingcard.html',
  controller: FeelingCardCtrl
};

function FeelingCardCtrl() {
  const vm = this;

  vm.delete = deleteSelf;
  vm.save = save;

  /***** PUBLIC *****/

  function deleteSelf() {
    vm.isLoading = true;
    vm.onDelete().finally(() => vm.isLoading = false);
  }

  function save() {
    vm.isLoading = true;
    vm.onSave()
      .then(() => vm.isEditing = false)
      .finally(() => vm.isLoading = false);
  }
}

module.exports = FeelingCard;
