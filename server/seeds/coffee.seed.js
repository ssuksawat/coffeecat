'use strict';

const Coffee = require('mongoose').model('Coffee');

const coffeeDrinks = [
  {
    name: 'espresso',
    description: 'Very classy',
    ingredients: [{name: 'espresso', qty: 1}],
    feelings: ['ANY']
  },
  {
    name: 'latte',
    description: 'Coffee drink with espresso and steamed milk',
    ingredients: [
      {name: 'espresso', qty: 0.3},
      {name: 'steamed milk', qty: 0.6},
      {name: 'milk froth', qty: 0.1}
    ],
    feelings: ['happy']
  },
  {
    name: 'pumpkin-spiced coffee',
    description: 'Brewed coffee with pumpkin spice',
    ingredients: [
      {name: 'coffee', qty: 1},
      {name: 'pumpkin spice'}
    ]
  }
];

module.exports = function IngredientSeed() {
  Coffee.find({}).exec()
    .then(collection => {
      if (collection.length > 0) { return; }
      coffeeDrinks.forEach(drink => Coffee.create(drink));
      console.log('Coffee seeded');
    });
};
