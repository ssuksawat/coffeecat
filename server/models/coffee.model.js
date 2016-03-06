'use strict';

const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!', unique: true },
  description: { type: String },
  cupSize: { type: String, enum: ['S', 'M', 'L', 'XL'] },
  ingredients: { type: Array },
  energy: { type: Number, min: 0, max: 100 },
  sweetness: { type: Number, min: 0, max: 100 }
});

coffeeSchema.plugin(require('./plugins/timestamp.plugin'));

mongoose.model('Coffee', coffeeSchema);
