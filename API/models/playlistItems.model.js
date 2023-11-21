const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistItems = new Schema(
  {
  youtubeId: String,
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
    resourceId: {
      kind: String,
      videoId: String,
    },
    videoOwnerChannelTitle: String,
    videoOwnerChannelId: String,
  },
  contentDetails: {
    videoId: String,
    videoPublishedAt: Date,
  },
  seen: {
    type: Boolean,
    default: false,
  },
  playlistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' },
},
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  });

  const PlaylistItems = mongoose.model('PlaylistItems', playlistItems);
  module.exports = PlaylistItems;
