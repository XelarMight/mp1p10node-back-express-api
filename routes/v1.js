const express = require('express');

const attractionRouter = require('../app/common/attraction/attraction.route.js');
const signUpRouter = require('../app/auth/signup.route.js');
const loginRouter = require('../app/auth/login.route.js');

const customMiddleware = function(req, res, next) {
    // Your middleware logic here
    next(); // Don't forget to call next() to continue to the next middleware/route
  };

const routes = express.Router();

routes.use(customMiddleware);

// Login
routes.use('/login', loginRouter);
// SIgn up
routes.use('/signup', signUpRouter);
// Attraction
routes.use('/attraction', attractionRouter);

module.exports = routes
