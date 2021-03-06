'use strict';

const mongoose = require('mongoose');
const Weight = require('../models/weight');

module.exports = function (req, res) {
    Weight.find({
        user: req.user.sub.toString()
    }, {'_id':0, 'date':1, 'user':1, 'weight':1, 'feel':1},
    function (err, weights) {
        if (err) {
            res.send(err);
        } else {
            var nWeights = weights.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
            });
            res.json(nWeights);
        }
    })
}
