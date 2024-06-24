const Users = require('../models/Users'); 
const jadwalWisuda = require('../models/jadwalWisuda'); 


exports.tampilkanDaftarMahasiswa = async (req, res) => {
    try {
        const daftarMahasiswa = await Users.findAll({
            where: {
                role: 'mahasiswa'
            }
        });

        if (!daftarMahasiswa || daftarMahasiswa.length === 0) {
            return res.render('daftarMahasiswa', { errorMessage: "Tidak ada data mahasiswa yang tersedia", daftarMahasiswa: [] });
        }

        return res.render('daftarMahasiswa', { daftarMahasiswa });
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil daftar mahasiswa:', error);
        return res.status(500).send('Terjadi kesalahan saat mengambil daftar mahasiswa');
    }
};

exports.lihatDetailMahasiswa = async (req, res) => {
    const { id } = req.params;

    try {
        const mahasiswa = await Users.findByPk(id);

        if (!mahasiswa) {
            return res.status(404).json({ error: 'Mahasiswa tidak ditemukan' });
        }

        res.render('detailMahasiswa', { mahasiswa });
    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil detail mahasiswa:', error);
        res.status(500).send('Terjadi kesalahan saat mengambil detail mahasiswa');
    }
};

exports.tampilkanFormUbahJadwal = async (req, res) => {
    try {
        res.render('formUbahJadwal'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menampilkan form ubah jadwal acara');
    }
};

exports.ubahJadwalAcara = async (req, res) => {
    const { id_jadwal, periode, tanggal_wisuda, lokasi, waktu } = req.body;
    try {
        let jadwal = await jadwalWisuda.findOne({ where: { id_jadwal } });

        if (!jadwal) {
            return res.status(404).send('Jadwal acara tidak ditemukan');
        }

        // Melakukan perubahan sesuai dengan data yang diterima dari form
        jadwal = await jadwal.update({
            periode,
            tanggal_wisuda,
            lokasi,
            waktu
        });

        res.redirect('/daftar'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengubah jadwal acara');
    }
};
