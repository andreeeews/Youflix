require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
require("../config/db.config");
const PlaylistItems = require("../models/playlistItems.model");
const Playlist = require("../models/playlist.model");

async function execute() {
  try {
    await Promise.all([Playlist.deleteMany(), PlaylistItems.deleteMany()]);
    const { data: { items: playlists } } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=${process.env.YT_API_KEY}&id=PLe00SXRpTe9LrLRrkg_0HwwhCEce-i5om&part=snippet`
    );
    
    const youtubePlaylist = playlists[0];
    youtubePlaylist.youtubeId = youtubePlaylist.id;
    delete youtubePlaylist.id;

    const playlist = await Playlist.create(youtubePlaylist);
    const { data: { items: videos } } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${youtubePlaylist.youtubeId}&key=${process.env.YT_API_KEY}`
    );

    const playlistItems = videos.map((video) => {
      video = { ...video, playlistId: playlist.id };
      video.youtubeId = video.id;
      delete video.id;
      return video;
    });
    await PlaylistItems.create(playlistItems);
  } catch(error) {
    console.error(error)
  } finally {
    await mongoose.connection.close();
  }
}

execute();
