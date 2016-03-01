'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WeightSchema = new Schema({
    weight: String,
    date: Date,
    user: String,
    feel: String
});
module.exports = mongoose.model("Weights", WeightSchema);
