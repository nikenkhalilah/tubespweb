import React, { useState } from 'react';
import axios from 'axios';
import './PendaftaranWisuda.css';

const PendaftaranWisuda = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    jurusan: '',
    tanggalLahir: '',
    alamat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/pendaftaran-wisuda', formData)
      .then(response => {
        alert('Pendaftaran berhasil!');
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="pendaftaran-wisuda-container">
      <h1>Pendaftaran Wisuda</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama:</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>NIM:</label>
          <input type="text" name="nim" value={formData.nim} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Jurusan:</label>
          <input type="text" name="jurusan" value={formData.jurusan} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Tanggal Lahir:</label>
          <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Alamat:</label>
          <textarea name="alamat" value={formData.alamat} onChange={handleChange} required />
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default PendaftaranWisuda;
