'use strict';

module.exports = Ingredients;

function Ingredients($resource) {
  return $resource('/api/ingredients/:id', {id: '@_id'}, {
    update: {
      method: 'PUT',
      isArray: false
    }
  });
}
