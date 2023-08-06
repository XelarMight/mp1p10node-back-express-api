//server back-End

/* Author: Alex */
/* Constant and configs import */
const routes = require('./routes/v1.js');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://repairadmin:dbTourist4321@cluster0.eeaglqg.mongodb.net/?retryWrites=true&w=majority';
//const databaseName = 'examen_duo_mean';

// app.use('/api/v1', routes)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api/v1', routes)

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
     console.log('Connected to Database');
     app.get('/hello', (req, res) => {
       res.setHeader("Content-Type", "application/json");
       res.setHeader("Access-Control-Allow-Origin", "*");
       res.send(JSON.stringify({"Hello": "Hello World"}));
     });

     app.listen(3500, () => {
       console.log('Server Started at 3500');
     });

   })
  .catch(error => console.error(error))
