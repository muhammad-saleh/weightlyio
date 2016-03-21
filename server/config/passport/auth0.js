'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const Auth0Strategy = require('passport-auth0');
const config = require('../config');
const User = mongoose.model('User');
const auth0keys = require('./auth0keys');

/**
 * Expose
 */
module.exports = new Auth0Strategy({
    domain:       'msaleh.auth0.com',
    clientID:     auth0keys.id,
    clientSecret: auth0keys.secret,
    callbackURL:  'http://localhost:1111'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);
