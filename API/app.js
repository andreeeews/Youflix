require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

require('./config/db.config');

const app = express();

const cors = require("./config/cors.config");
app.use(cors);

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.use(express.json());
app.use(logger('dev'));


const sessionConfig = require("./config/session.config");
app.use(sessionConfig.session);
app.use(sessionConfig.loadSessionUser);

const routes = require('./config/routes.config');
app.use('/v1', routes);

app.use((req, res, next) => next(createError(404, "Route not found")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`API running at ${port} ✅`));