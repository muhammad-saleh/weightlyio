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

/**
 * Route middlewares
 */

const isAuth = [auth.requiresLogin];

/**
 * Expose routes
 */

module.exports = function (app, passport) {

    var corsOptions = {
        origin: 'http://localhost:1111',
        credentials: true
    };

    // user routes
    app.get('/login', cors(corsOptions), users.login);
    app.get('/signup', users.signup);
    app.get('/logout', users.logout);
    app.post('/users', users.create);
    app.get('/user', cors(corsOptions), isAuth, users.getUser);
    app.post('/height', cors(corsOptions), isAuth, users.postHeight);
    app.post('/goal', cors(corsOptions), isAuth, users.postGoal);

    app.post('/users/session',
        passport.authenticate('local', {
            failureRedirect: '/login',
            failureFlash: 'Invalid email or password.'
        }), users.session);

    app.get('/users/:userId', users.show);

    app.get('/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['email', 'user_about_me'],
            failureRedirect: '/login'
        }), users.signin);

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/login'
        }), users.authCallback);


    app.get('/auth/twitter',
        passport.authenticate('twitter', {
            failureRedirect: '/login'
        }), users.signin);

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            failureRedirect: '/login'
        }), users.authCallback);

    app.get('/auth/google',
        passport.authenticate('google', {
            failureRedirect: '/login',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }), users.signin);

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/login'
        }), users.authCallback);



    app.param('userId', users.load);



    // home route
    app.get('/', (req, res) => res.render('404'));


    //Weight get
    app.get('/weight', cors(corsOptions), isAuth, getWeight);
    app.post('/weight', cors(corsOptions), isAuth, postWeight);


    /**
     * Error handling
     */

    app.use(function (err, req, res, next) {
        // treat as 404
        if (err.message && (~err.message.indexOf('not found') || (~err.message.indexOf('Cast to ObjectId failed')))) {
            return next();
        }

        console.error(err.stack);

        if (err.stack.includes('ValidationError')) {
            res.status(422).render('422', {
                error: err.stack
            });
            return;
        }

        // error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    // assume 404 since no middleware responded
    app.use(function (req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
