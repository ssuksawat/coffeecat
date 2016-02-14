'use strict';

module.exports = Coffee;

function Coffee($resource) {
  return $resource('/api/coffee/:id', {id: '@_id'}, {
    update: {
      method: 'PUT',
      isArray: false
    }
  });
}
