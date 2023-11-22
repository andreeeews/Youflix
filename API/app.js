require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require('mongoose')

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

app.use((error, req, res, next) => {
  if (
    error instanceof mongoose.Error.CastError &&
    error.message.includes("_id")
  ) {
    error = createError(404, "Resource not found");
  } else if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  } else if (!error.status) {
    error = createError(500, error);
  }
  console.error(error);

  let errors;
  if (error.errors) {
    errors = Object.keys(error.errors).reduce((errors, errorKey) => {
      errors[errorKey] =
        error.errors[errorKey].message || error.errors[errorKey];
      return errors;
    }, {});
  }

  const data = {
    message: error.message,
    errors,
  };
  res.status(error.status).json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`API running at ${port} ✅`));