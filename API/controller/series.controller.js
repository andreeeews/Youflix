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
      res.status(200).json(chapters)
    })
    .catch((error) => next(error))
}

module.exports.seenStatus = (req, res, next) => {
  const { videoId, seen } = req.body;

  PlaylistItems.updateOne(
    { 'contentDetails.videoId': videoId },
    { seen }
  )
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.error('Error updating seen status:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    });
};