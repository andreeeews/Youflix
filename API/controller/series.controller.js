const PlaylistItems = require("../models/playListItems.model");
const Playlist = require("../models/playlist.model")

module.exports.list = (req, res, next) => {
  Playlist.find()
    .then((playlists) => {
      res.json(playlists)
    })
    .catch((error) => next(error));
};

module.exports.listItems = (req, res, next) => {
  PlaylistItems.find({ playlistId: req.params.id })
    .then((chapters) => {
      console.log(chapters)
      res.status(200).json(chapters)
    })
    .catch((error) => next(error))
}