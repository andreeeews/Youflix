const express = require('express');
const router = express.Router();
const user = require("../controller/user.controller")


router.get('/home', function(req, res, next) {
    res.json({ 'test': 'completed' })
})

// User section
//router.get()
router.post('/register', user.register);


module.exports = router;