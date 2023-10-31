const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

require('./config/db.config');

const app = express();

app.use(express.json());
app.use(logger('dev'));

//TODO SESSION CONFIG

const routes = require('./config/routes.config');
app.use('/v1', routes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`API running at ${port} ✅`));