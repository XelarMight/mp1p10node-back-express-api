const express = require('express');

const mainController = require('./signup.controller.js');
const signup = mainController.signup;

const router = express.Router();

router.post('/', signup);

module.exports = router;
