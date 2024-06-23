import PendaftaranWisuda from '../models/PendaftaranWisudaModel.js';

export const daftarWisuda = async (req, res) => {
    try {
        const { nama, nim, jurusan, tanggalLahir, alamat } = req.body;
        await PendaftaranWisuda.create({ nama, nim, jurusan, tanggalLahir, alamat });
        res.json({ message: 'Pendaftaran berhasil!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
