const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/daftar', adminController.tampilkanDaftarMahasiswa);

router.get('/mahasiswa/:id', adminController.lihatDetailMahasiswa);

router.get('/ubahjadwal', adminController.tampilkanFormUbahJadwal);

router.post('/ubah-jadwal', adminController.ubahJadwalAcara);

module.exports = router;
