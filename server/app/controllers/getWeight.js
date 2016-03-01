'use strict';

const mongoose = require('mongoose');
const Weight = require('../models/weight');

module.exports = function (req, res) {
    Weight.find({
        user: req.user._id.toString()
    }, function (err, weights) {
        if (err) {
            res.send(err);
        } else {
            res.json(weights)
        }
    })
}
