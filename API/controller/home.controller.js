const createError = require("http-errors");
const Playlist = require("../models/playlist.model");

module.exports.list = (req, res, next) => {
  Playlist.find()
    .then((series) => { res.status(200). res.json(series)})
    .catch((error) => {
      console.error("Error getting series list");
      next(error);
    });
};