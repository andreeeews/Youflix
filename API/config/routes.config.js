const express = require("express");
const router = express.Router();
const user = require("../controller/user.controller");
const home = require("../controller/home.controller");
const series = require("../controller/series.controller");
const commentController = require("../controller/comment.controller");

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

router.get("/comments/:playlistId", commentController.listComments);
router.post("/comments/:playlistId", commentController.createComment);
router.delete("/comments/:commentId", commentController.deleteComment);

module.exports = router;
