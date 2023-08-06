const express = require('express');

const mainController = require('./login.controller.js');
const login = mainController.login;

const router = express.Router();

router.post('/', login);

module.exports = router;
