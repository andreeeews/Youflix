const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlist = new Schema({
  id: String,
  snippet: {
    publishedAt: Date,
    channelId: String,
    title: String,
    description: String,
    thumbnails: {
      maxres: {
        url: String,
        width: Number,
        height: Number,
      },
    },
    channelTitle: String,
    localized: {
      title: String,
      description: String,
    },
  },
});

const Playlist = mongoose.model('Playlist', playlist);
module.exports = Playlist;