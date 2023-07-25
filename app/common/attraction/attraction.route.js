const express = require('express');

const findAllAttraction = require('./attraction.controller.js');

const router = express.Router();

router.get('/', findAllAttraction);

module.exports = router;