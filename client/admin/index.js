'use strict';

const app = require('angular').module('coffeecat.admin', [
  /* Dependencies */
  'coffeecat.models',
  'coffeecat.auth',

  /* HTML Templates */
  require('./admin.html'),
  require('./cards/coffeecard.html'),
  require('./cards/feelingcard.html'),
  require('./cards/ingredientcard.html')
]);

const AdminRoute = require('./admin.route');
const AdminCtrl = require('./admin.controller');
const CoffeeCard = require('./cards/coffeecard.component');
const FeelingCard = require('./cards/feelingcard.component');
const IngredientCard = require('./cards/ingredientcard.component');

app.config(['$stateProvider', AdminRoute]);
app.controller('AdminCtrl', [
  '$scope',
  '$mdToast',
  'currentUser',
  'Coffee',
  'Feeling',
  'Ingredient',
   AdminCtrl
 ]);
 app.component('adminCoffeeCard', CoffeeCard);
 app.component('adminFeelingCard', FeelingCard);
 app.component('adminIngredientCard', IngredientCard);

module.exports = app.name;
