const express = require("express");
const router = express.Router();
const user = require("../controller/user.controller");
const home = require("../controller/home.controller");
const series = require("../controller/series.controller");
const commentController = require("../controller/comment.controller");
const Playlist = require("../models/playlist.model");
const User = require("../models/user.model")

// Home section
router.get("/home", home.list);

// User section
//router.get()
router.post("/register", user.register);
router.post("/login", user.login);
router.post("/profile/:id", user.profile);
router.patch("/profile/:id/update", user.update);
router.post("/logout", user.logout);

// Series section
router.get("/playlists", series.list);
router.get("/playlists/:id", series.listItems);
router.post("/updateSeen", series.seenStatus);
router.post("/seeLater/:playlistId", series.markSeriesForLater);

router.get("/comments/:playlistId", commentController.listComments);
router.post("/comments/:playlistId", commentController.createComment);
router.delete("/comments/:commentId", commentController.deleteComment);

router.get("/mylist/:userId", (req, res) => {
  const userId = req.params.userId;

  User.findById(userId)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado." });
      }

      //const playlistIds = Array.from(user.seelater);
      // O puedes usar el operador de propagación
      const playlistIds = [...user.seelater];

      console.log(playlistIds);
      return res.json(playlistIds);
    })
    .catch((error) => {
      console.error("Error al obtener la lista del usuario:", error);
      res.status(500).json({ message: "Error interno del servidor." });
    });
});

module.exports = router;
