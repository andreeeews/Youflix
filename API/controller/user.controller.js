const createError = require('http-errors');
const User = require("../models/user.model");
const mongoose = require("mongoose");

module.exports.register = (req, res, next) => {
  console.error(req.body)  
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
              res.status(200).json(user)
            } else {
              res.status(401).json({ message: "Wrong user or password"})
            }
          })
          .catch((error) => next(error))
      } else {
        res.status(401).json({ message: "Wrong user or password"})
      }
    })
};

module.exports.profile = (req, res, next) => {
  User.find(res.locals.currentUser)
    .then((user) => {
      if(user) {
        res.status(200).json({ user })
      } else {
        next(createError(404, 'User not found'))
      }
    })
    .catch((error) => next(error))
};

module.exports.update = (req, res, next) => {
  User.findOneAndUpdate(res.locals.currentUser, req.body, {
    runValidators: true,
    new: true
  })
    .then((user) => {
      if(user) {
        res.json(user);
      } else {
        next(createError(404, 'User not found'))
      }
    })
    .catch((error) => next(error))
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).send();
};
