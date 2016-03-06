'use strict';

const app = require('angular').module('coffeecat.admin', [
  /* Dependencies */
  'coffeecat.models',
  'coffeecat.auth',

  /* HTML Templates */
  require('./admin.html'),
  require('./cards/coffeecard.html'),
  require('./cards/ingredientcard.html')
]);

const AdminRoute = require('./admin.route');
const AdminCtrl = require('./admin.controller');
const CoffeeCard = require('./cards/coffeecard.component');
const IngredientCard = require('./cards/ingredientcard.component');

app.config(['$stateProvider', AdminRoute]);
app.controller('AdminCtrl', [
  '$scope',
  '$q',
  '$log',
  '$mdToast',
  'currentUser',
  'Coffee',
  'Ingredient',
   AdminCtrl
 ]);
 app.component('adminCoffeeCard', CoffeeCard);
 app.component('adminIngredientCard', IngredientCard);

module.exports = app.name;
