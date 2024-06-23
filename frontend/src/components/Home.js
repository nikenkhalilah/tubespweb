import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="content-container">
        <div className="welcome-section">
          <h1>Welcome to TechnoGrad!</h1>
          <p>
            Sistem Informasi Wisuda Online Fakultas Teknologi Informasi merupakan sistem
            yang digunakan calon wisudawan/ti untuk melakukan pendaftaran wisuda yang
            terhubung dengan Sistem Informasi Akademik (SIA) secara online.
          </p>
        </div>
        <div className="registration-steps">
          <h2>Alur Pendaftaran</h2>
          <ol>
            <li>Login ke akun Anda di website wisuda fakultas.</li>
            <li>Pilih menu pendaftaran wisuda.</li>
            <li>Isi formulir pendaftaran dengan lengkap dan benar.</li>
            <li>Unggah dokumen-dokumen yang diperlukan dengan format sesuai dengan yang ditentukan.</li>
            <li>Submit formulir pendaftaran.</li>
            <li>Tunggu verifikasi dari website wisuda. Verifikasi biasanya dilakukan dalam beberapa hari kerja.</li>
            <li>Jika pendaftaran diterima, Anda akan menerima email informasi selanjutnya mengenai wisuda.</li>
          </ol>
        </div>
        <footer>
          &copy; 2024 Fakultas Teknologi Informasi. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
