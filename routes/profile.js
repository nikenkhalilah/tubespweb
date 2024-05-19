// File: routes/profile.js
const express = require('express');
const router = express.Router();

// Rute untuk menampilkan profil pengguna
router.get('/', function(req, res) {
    // Handler rute untuk menampilkan profil pengguna
    res.render('profile', { user: req.user });
});

module.exports = router;
