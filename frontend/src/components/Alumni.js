import React, { useState } from 'react';
import './Alumni.css';

const alumniData = [
  { name: 'Annisa', nim: '2011521007', jurusan: 'Sistem Informasi', contact: 'annisa@gmail.com' },
  { name: 'Syifa', nim: '1911511009', jurusan: 'Teknik Komputer', contact: 'syifa@gmail.com' },
  { name: 'Sherly', nim: '2211532017', jurusan: 'Sistem Informasi', contact: 'sherly@gmail.com' },
  { name: 'Diaz', nim: '1711511020', jurusan: 'Teknik Komputer', contact: 'diaz@gmail.com' },
  { name: 'Thaya', nim: '1811523009', jurusan: 'Sistem Informasi', contact: 'thaya@gmail.com' },
  { name: 'Dela', nim: '2011522003', jurusan: 'Sistem Informasi', contact: 'dela@gmail.com' },
  { name: 'Farhan', nim: '1711513021', jurusan: 'Teknik Komputer', contact: 'farhan@gmail.com' },
];

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="alumni-container">
      <h1>Portal Alumni</h1>
      <input
        type="text"
        placeholder="Cari Nama Alumni..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="alumni-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Jurusan</th>
            <th>Kontak</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlumni.map((alumni, index) => (
            <tr key={index}>
              <td>{alumni.name}</td>
              <td>{alumni.nim}</td>
              <td>{alumni.jurusan}</td>
              <td>{alumni.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alumni;
