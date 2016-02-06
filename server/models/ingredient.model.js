'use strict';

const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
  name: { type: String, require: '{PATH} is required', unique: true },
  months: {
    type: [String],
    enum: ['ALL', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] 
  }
});

mongoose.model('Ingredient', ingredientSchema);
