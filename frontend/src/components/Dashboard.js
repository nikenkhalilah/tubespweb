import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Wisuda from './Wisuda';
import Biaya from './Biaya';
import Jadwal from './Jadwal';
import Pengumuman from './Pengumuman';
import Alumni from './Alumni';
import Profil from './Profil';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/wisuda/*" element={<Wisuda />} />
          <Route path="/biaya" element={<Biaya />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
