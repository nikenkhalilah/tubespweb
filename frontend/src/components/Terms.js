import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/dashboard/wisuda/form');
  };

  return (
    <div className="terms">
      <div className="content-container">
        <h2>Syarat & Ketentuan Pendaftaran Wisuda Online</h2>
        <ul>
          <li><i className="fas fa-check-circle"></i> Pastikan anda telah menyelesaikan kliring di fakultas.</li>
          <li><i className="fas fa-check-circle"></i> Pastikan anda telah berstatus Lulus atau data kelulusan anda telah di entrikan pada Sistem Informasi Akademik atau kliring akademik anda sudah selesai. Jika belum silahkan melapor ke fakultas masing-masing.</li>
          <li><i className="fas fa-check-circle"></i> Mendaftar secara online di website pendaftaran wisuda FTI GradTech.</li>
          <li><i className="fas fa-check-circle"></i> Konfirmasi biodata anda untuk memastikan kebenaran data dan tercatat sebagai peserta wisuda, serta siapkan Pas Foto formal untuk ijazah dengan warna latar (Biru untuk laki-laki dan Merah untuk perempuan), Ukuran file minimal 100kb dan maksimal 500kb. Siapkan File hasil scan Surat Pernyataan Mahasiswa, Ukuran file maksimal 200kb. Format Surat Pernyataan Mahasiswa silahkan download disini.</li>
          <li><i className="fas fa-check-circle"></i> Preview Draf Ijazah anda sebelum membuat surat pernyataan.</li>
          <li><i className="fas fa-check-circle"></i> Baca dan setujuilah surat pernyataan kebenaran data anda.</li>
          <li><i className="fas fa-check-circle"></i> Cetak Draf Ijazah dan Surat Pernyataan sebagai bukti telah mendaftar wisuda.</li>
          <li><i className="fas fa-check-circle"></i> Pastikan anda sudah melakukan finalisasi (langkah 4) sebagai langkah terakhir pendaftaran agar status anda terdaftar sebagai peserta wisuda.</li>
        </ul>
        <button className="next-button" onClick={handleNext}>Lanjutkan ke Form Pendaftaran</button>
      </div>
    </div>
  );
};

export default Terms;
