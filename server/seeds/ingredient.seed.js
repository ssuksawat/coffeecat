'use strict';

const Ingredient = require('mongoose').model('Ingredient');

const ingredients = [
  {name: 'pumpkin spice', months: ['OCT', 'NOV']},
  {name: 'vanilla ice cream', months: ['MAY', 'JUNE', 'JULY']},
  {name: 'blueberry', months: ['ALL']},
  {name: 'cinnamon', months: ['DEC']},
  {name: 'chocolate', months: ['ALL']}
];

module.exports = function IngredientSeed() {
  Ingredient.find({}).exec()
    .then(collection => {
      if (collection.length > 0) { return; }
      ingredients.forEach(ingr => Ingredient.create(ingr));
      console.log('Ingredients seeded');
    });
};
