const PlaylistItems = require("../models/playListItems.model");
const Playlist = require("../models/playlist.model")
const User = require("../models/user.model")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;

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

module.exports.markSeriesForLater = (req, res, next) => {
  const userId = req.body.userId;
  const playlistId = req.params.playlistId;
  console.log(playlistId);

  Playlist.findById(playlistId)
    .then((playlist) => {
      if (!playlist) {
        return Promise.reject({ status: 404, message: 'Playlist no encontrada.' });
      }

      // Utiliza findByIdAndUpdate para realizar la actualización
      return User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { seelater: { playlistId: new ObjectId(playlistId), title: playlist.title } },
        },
        { new: true }
      );
    })
    .then((updatedUser) => {
      if (!updatedUser) {
        return Promise.reject({ status: 404, message: 'Usuario no encontrado.' });
      }

      res.status(200).json({ message: 'La serie se ha marcado para ver después.' });
    })
    .catch((error) => {
      console.error('Error al marcar la serie para ver después:', error);
      const status = error.status || 500;
      res.status(status).json({ message: 'Error interno del servidor.', error: error.message });
    });
};
