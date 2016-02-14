'use strict';

const mongoose = require('mongoose');

const feelingSchema = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!', unique: true },
  message: { type: String }
});

mongoose.model('Feeling', feelingSchema);
