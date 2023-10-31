const createError = require('http-errors');
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.register = (req, res, next) => {
    User.create(req.body)
    .then((user) => {
      res.status(201).json(user)
    })
    .catch((error) => {
      console.error("Error creating new user");
      next(error);
    })
}