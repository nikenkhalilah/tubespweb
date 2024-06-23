import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/wisuda">Pendaftaran Wisuda</Link>
        <Link to="/dashboard/biaya">Informasi Biaya</Link>
        <Link to="/dashboard/jadwal">Jadwal Wisuda</Link>
        <Link to="/dashboard/pengumuman">Pengumuman</Link>
        <Link to="/dashboard/alumni">Portal Alumni</Link>
        <Link to="/dashboard/profil">Profil</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
