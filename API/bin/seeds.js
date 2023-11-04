const mongoose = require('mongoose')
const axios = require('axios')
const PlaylistItems = require('../models/playlistItems.model')

console.log('pre connection')

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('hola');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });