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

// exports.getUser = function (req, res) {
//     const _id = req.user._id;
//     User.findById(_id,function(err, user){
//         // let returned_user = {
//         //     _id: _id,
//         //     email: user.email,
//         //     provider: user.provider,
//         //     height: user.height || null,
//         //     goal: user.goal || null,
//         //     data: user[user.provider],
//         //     username: user.username
//         // };
//         // returned_user.data.provider = user.provider || 'local';
//         res.send(user);
//     })
// };
// exports.getUser = function (req, res) {
//     res.send(req.user);
// };

exports.postHeight = function (req, res) {
    User.findById(req.user.sub, function (err, user) {
        if (err) return done(err);
        user.height = req.body.height;
        user.save();
        res.send();
    });
}

exports.postGoal = function (req, res) {
    User.findById(req.user.sub, function (err, user) {
        if (err) return done(err);
        user.goal = req.body.goal;
        user.save();
        res.send();
    });
}
