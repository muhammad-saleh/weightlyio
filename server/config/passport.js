'use strict';

/*!
 * Module dependencies.
 */

const mongoose = require('mongoose');
const User = mongoose.model('User');

const local = require('./passport/local');
const facebook = require('./passport/facebook');
const auth0 = require('./passport/auth0');
// const twitter = require('./passport/twitter');

/**
 * Expose
 */

module.exports = function (passport) {

    // serialize sessions
    passport.serializeUser((user, cb) => cb(null, user.id));
    passport.deserializeUser((id, cb) => User.load({
        criteria: {
            _id: id
        }
    }, cb));

    // use these strategies
    passport.use(auth0);
    // passport.use(twitter);
};
