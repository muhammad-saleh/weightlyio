'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
var Weight = require('../models/weight');

module.exports = function(req, res){
    // res.json("Hi Get Weight")
    Weight.find({user: req.user._id.toString()}, function (err, weights) {
      if (err) return console.error(err);
      res.json(weights)
    })
}
