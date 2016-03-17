'use strict';

const mongoose = require('mongoose');
const Weight = require('../models/weight');

module.exports = function (req, res) {
    var weight = new Weight({
        weight: req.body.weight.toString(),
        date: req.body.date || new Date(),
        user: req.user._id.toString(),
        feel: req.body.feel || "normal"
    });

    weight.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Weight created!'
            });
        }
    });
}
