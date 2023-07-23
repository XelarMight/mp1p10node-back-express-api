//server back-End

/* Author: Alex */
/* Constant and configs import */
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.listen(3000, () => {
  console.log('Server Started at 3000');
});
