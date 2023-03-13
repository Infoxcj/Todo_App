require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

(async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log('Connected to mongo');
  } catch (error) {
    console.log(error);
  }
})();

//Rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/components', express.static(path.resolve('views', 'components',)));

module.exports = app;