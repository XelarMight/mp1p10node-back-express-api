const express = require('express');

const attractionRouter = require('../app/common/attraction/attraction.route.js');

const routes = express.Router();
// Attraction
routes.use('/attraction', function(){}, attractionRouter);