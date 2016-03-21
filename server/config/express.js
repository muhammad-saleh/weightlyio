'use strict';

/**
 * Module dependencies.
 */

const express = require('express');
// const session = require('express-session');
const compression = require('compression');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const winston = require('winston');
const config = require('./config');
const swig = require('swig');
const env = process.env.NODE_ENV || 'development';
const cors = require('cors');

/**
 * Expose
 */

module.exports = function (app, passport) {

app.use(cors());



  // Compression middleware (should be placed before express.static)
  app.use(compression({
    threshold: 512
  }));

  // Static files middleware
  app.use(express.static(config.root + '/public'));

  // Use winston on production
  let log = 'dev';
  if (env !== 'development') {
    log = {
      stream: {
        write: message => winston.info(message)
      }
    };
  }

  // Don't log during tests
  // Logging middleware
  if (env !== 'test') app.use(morgan(log));

  // Swig templating engine settings
  if (env === 'development' || env === 'test') {
    swig.setDefaults({
      cache: false
    });
  }

  // CookieParser should be above session
  app.use(cookieParser());

};
