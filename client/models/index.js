'use strict';

const app = require('angular').module('coffeecat.models', []);

const Coffee = require('./coffee.model');
const Feeling = require('./feeling.model');
const Ingredient = require('./ingredient.model');

app.factory('Coffee', ['$resource', Coffee]);
app.factory('Feeling', ['$resource', Feeling]);
app.factory('Ingredient', ['$resource', Ingredient]);

module.exports = app.name;
