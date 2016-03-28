'use strict';

/*!
 * Module dependencies.
 */

// Note: We can require users, articles and other cotrollers because we have
// set the NODE_PATH to be ./app/controllers (package.json # scripts # start)

const users = require('../app/controllers/users');
const auth = require('./middlewares/authorization');
const getWeight = require('../app/controllers/getWeight');
const postWeight = require('../app/controllers/postWeight');
const cors = require('cors');
const jwt = require('express-jwt');
const auth0keys = require('./passport/auth0keys');

var authCheck = jwt({
  secret: new Buffer(auth0keys.secret, 'base64'),
  audience: auth0keys.id
});

/**
 * Route middlewares
 */

const isAuth = [auth.requiresLogin];

/**
 * Expose routes
 */

module.exports = function (app, passport) {
    app.get('/user', authCheck, users.getUser);

    app.post('/height', authCheck, users.postHeight);
    app.post('/goal', authCheck, users.postGoal);

    //Weight get

    app.post('/weight', authCheck, postWeight);
    app.get('/weight', authCheck, getWeight);

};
