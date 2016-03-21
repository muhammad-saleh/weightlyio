'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const wrap = require('co-express');
const User = mongoose.model('User');


/**
 * Create user
 */

exports.create = wrap(function* (req, res) {
  const user = new User(req.body);
  user.provider = 'local';
  yield user.save();
  req.logIn(user, err => {
    if (err) req.flash('info', 'Sorry! We are not able to log you in!');
    return res.redirect('/');
  });
});



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
exports.getUser = function (req, res) {
    res.send(req.user);
};

exports.postHeight = function (req, res) {
    User.findById(req.user._id, function (err, user) {
        if (err) return done(err);
        user.height = req.body.height;
        user.save();
        res.send();
    });
}

exports.postGoal = function (req, res) {
    User.findById(req.user._id, function (err, user) {
        if (err) return done(err);
        user.goal = req.body.goal;
        user.save();
        res.send();
    });
}

exports.signin = function () {};

/**
 * Auth callback
 */

exports.authCallback = login;

/**
 * Show login form
 */

exports.login = function (req, res) {
  res.render('users/login', {
    title: 'Login'
  });
};

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  });
};

/**
 * Logout
 */

exports.logout = function (req, res) {
  req.logout();
  res.send();
};

/**
 * Session
 */

exports.session = login;

/**
 * Login
 */

function login (req, res) {
  const redirectTo = req.session.returnTo
    ? req.session.returnTo
    : '/';
  delete req.session.returnTo;
  res.redirect(redirectTo);
}
