const express = require('express');
const router = express.Router();
const graduatesController = require('../controllers/graduatesController');
const { upload } = require('../config/multer'); 
const { uploadPembayaran } = require('../controllers/Users'); 

router.get('/cariMahasiswa', graduatesController.searchGraduates);

router.get('/upload-pembayaran', (req, res) => {
    res.render('uploadPembayaran');
});

router.post('/upload-pembayaran', upload.single('bukti_pembayaran'), uploadPembayaran);

module.exports = router;
