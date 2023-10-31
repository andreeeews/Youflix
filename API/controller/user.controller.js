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
};

module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if(user) {
        return user.checkPassword(req.body.password)
          .then((match) => {
            if(match) {
              req.session.userId = user.id;
              res.status(200).json({ message: "Login succesfull"})
            } else {
              res.status(401).json({ message: "Wrong user or password"})
            }
          })
          .catch((error) => next(error))
      } else {
        res.status(401).json({ message: "Wrong user or password"})
      }
    })
}