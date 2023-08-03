const express = require('express');

const attractionRouter = require('../app/common/attraction/attraction.route.js');

const customMiddleware = function(req, res, next) {
    // Your middleware logic here
    next(); // Don't forget to call next() to continue to the next middleware/route
  };

const routes = express.Router();

routes.use(customMiddleware);

// Attraction
routes.use('/attraction', attractionRouter);

module.exports = routes