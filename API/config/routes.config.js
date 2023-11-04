const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller")

// Home section
router.get('/home', function(req, res, next) {
    res.json({ 'test': 'completed' })
})

// User section
//router.get()
router.post('/register', user.register);
router.post('/login', user.login);
router.post('/profile', user.profile);
router.patch('/profile', user.update);


module.exports = router;