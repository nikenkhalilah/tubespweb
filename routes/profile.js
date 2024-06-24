const express = require('express');
const router = express.Router();
const { getUsers, Register, Login, Logout, lihatProfil } = require("../controllers/Users.js");

router.get('/', function(req, res) {
    
res.render('/profile/:userId', { user: req.user });
});
router.get('/:userId', lihatProfil);

module.exports = router;
