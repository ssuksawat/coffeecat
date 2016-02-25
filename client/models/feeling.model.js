'use strict';

module.exports = Feeling;

function Feeling($resource) {
  return $resource('/api/feelings/:id', {id: '@_id'}, {
    update: {
      method: 'PUT',
      isArray: false
    }
  });
}
