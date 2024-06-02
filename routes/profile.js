// File: routes/profile.js
const express = require('express');
const router = express.Router();
const { getUsers, Register, Login, Logout, lihatProfil } = require("../controllers/Users.js");

// Rute untuk menampilkan profil pengguna
router.get('/', function(req, res) {
    
    res.render('profile', { user: req.user });
});
router.get('/:userId', lihatProfil);

module.exports = router;
