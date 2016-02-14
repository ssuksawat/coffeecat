'use strict';

const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!', unique: true },
  description: { type: String },
  cupSize: { type: String, enum: ['S', 'M', 'L', 'XL'] },
  ingredients: { type: Array, required: '{PATH} is required!}' },
  feelings: { type: Array, required: '{PATH} is required!' }
});

coffeeSchema.plugin(require('./plugins/timestamp.plugin'));

mongoose.model('Coffee', coffeeSchema);
