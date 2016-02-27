'use strict';

const mongoose = require('mongoose');

const feelingSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!', unique: true },
  value: { type: Number, min: 0, max: 100 },
  message: { type: String }
});

mongoose.model('Feeling', feelingSchema);
