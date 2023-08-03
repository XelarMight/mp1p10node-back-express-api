const express = require('express');

const mainController = require('./attraction.controller.js');
const findAllAttraction = mainController.findAllAttraction;
const findAnother = mainController.findAnother;

const router = express.Router();

router.get('/', findAnother);
router.get('/accueil', findAllAttraction);

module.exports = router;