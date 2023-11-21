require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
require("../config/db.config");
const PlaylistItems = require("../models/playlistItems.model");
const Playlist = require("../models/playlist.model");

async function execute() {
  try {
    const { data: { items: playlists } } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?key=${process.env.YT_API_KEY}&id=PLIjkAOS-DpiSzI7B6gK6cZ7U9wNbGEMKQ&part=snippet`
    );

    const youtubePlaylist = playlists[0];
    youtubePlaylist.youtubeId = youtubePlaylist.id;
    delete youtubePlaylist.id;

    // Verificar si ya existe una playlist con el mismo youtubeId
    const existingPlaylist = await Playlist.findOne({ youtubeId: youtubePlaylist.youtubeId });

    if (!existingPlaylist) {
      const playlist = await Playlist.create(youtubePlaylist);
      const { data: { items: videos } } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=100&playlistId=${youtubePlaylist.youtubeId}&key=${process.env.YT_API_KEY}`
      );

      const playlistItems = videos.map((video) => {
        video = { ...video, playlistId: playlist.id };
        video.youtubeId = video.id;
        delete video.id;
        return video;
      });

      await PlaylistItems.create(playlistItems);
    } else {
      console.log("La playlist ya existe, no se creará una nueva.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

execute();
