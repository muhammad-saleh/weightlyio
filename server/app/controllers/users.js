'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const wrap = require('co-express');
const User = mongoose.model('User');




/**
 *  get profile
 */

exports.getUser = function (req, res) {
    const sub = req.user.sub;
    console.log(sub)
    User.findOne({sub: sub},function(err, user){
        if(err) res.send(err);
        if(user){
            let returned_user = {
                sub: user.sub,
                height: user.height || null,
                goal: user.goal || null
            };
            res.send(returned_user);
        } else {
            res.send({});
        }
    })
};

// exports.getUser = function (req, res) {
//     res.send(req.user);
// };

exports.postHeight = function (req, res) {
    User.count({sub: req.user.sub},function(err, c){
        if(c === 0) {
            let nUser = new User({
                sub: req.user.sub,
                height: req.body.height
            });
            nUser.save();
            res.send();
        } else {
            User.findOne(req.user.sub, function (err, user) {
                if (err) return console.log(err);
                user.height = req.body.height;
                user.save();
                res.send();
            });
        }
    })

}

exports.postGoal = function (req, res) {
    User.count({sub: req.user.sub},function(err, c){
        if(c === 0) {
            let nUser = new User({
                sub: req.user.sub,
                goal: req.body.goal
            });
            nUser.save();
            res.send();
        } else {
            User.findOne(req.user.sub, function (err, user) {
                if (err) return console.log(err);
                user.goal = req.body.goal;
                user.save();
                res.send();
            });
        }
    })
}
