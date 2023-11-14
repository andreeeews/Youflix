const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller")
const home = require("../controller/home.controller")
const series = require("../controller/series.controller")

// Home section
router.get('/home', home.list);

// User section
//router.get()
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/profile', user.profile);
router.patch('/profile', user.update);
router.post('/logout', user.logout)

// Series section
router.get("/playlists", series.list);


module.exports = router;