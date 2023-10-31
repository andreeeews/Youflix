const express = require('express');
const logger = require('morgan');

require('./config/db.config');

const app = express();

app.use(express.json());
app.use(logger('dev'));

//TODO SESSION CONFIG