'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
var Weight = require('../models/weight');

module.exports = function(req, res){
    console.log(req.user._id)

    // var weight = new WeightSchema();      // create a new instance of the Bear model
    //     weight.weight = req.body.weight;  // set the bears name (comes from the request)

        var weight = new Weight({
            weight:req.body.weight.toString(),
            date: new Date(),
            user: req.user._id.toString(),
            feel: req.body.feel || "normal"
        });

        // save the bear and check for errors
        weight.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Weight created!' });
        });
}
