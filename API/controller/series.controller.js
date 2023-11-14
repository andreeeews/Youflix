const Playlist = require("../models/playlist.model")

module.exports.list = (req, res, next) => {
  Playlist.find()
    .then((playlists) => {
      res.json(playlists)
    })
    .catch((error) => next(error));
};