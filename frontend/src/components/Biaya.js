import React, { useState } from 'react';
import './Biaya.css';

const Biaya = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="biaya-container">
      <h1>Informasi Biaya Wisuda</h1>
      <div className={`biaya-section ${activeSection === 1 ? 'active' : ''}`} onClick={() => toggleSection(1)}>
        <h2>1. Biaya Administrasi</h2>
        {activeSection === 1 && (
          <>
            <p>Biaya administrasi mencakup pengolahan dokumen dan administrasi kelulusan.</p>
            <p><strong>Jumlah:</strong> Rp 500.000</p>
          </>
        )}
      </div>
      <div className={`biaya-section ${activeSection === 2 ? 'active' : ''}`} onClick={() => toggleSection(2)}>
        <h2>2. Biaya Toga</h2>
        {activeSection === 2 && (
          <>
            <p>Biaya ini mencakup sewa atau pembelian toga dan perlengkapannya.</p>
            <p><strong>Jumlah:</strong> Rp 300.000</p>
          </>
        )}
      </div>
      <div className={`biaya-section ${activeSection === 3 ? 'active' : ''}`} onClick={() => toggleSection(3)}>
        <h2>3. Biaya Ijazah dan Transkrip</h2>
        {activeSection === 3 && (
          <>
            <p>Biaya pencetakan ijazah dan transkrip akademik resmi.</p>
            <p><strong>Jumlah:</strong> Rp 200.000</p>
          </>
        )}
      </div>
      <div className={`biaya-section ${activeSection === 4 ? 'active' : ''}`} onClick={() => toggleSection(4)}>
        <h2>4. Biaya Acara Wisuda</h2>
        {activeSection === 4 && (
          <>
            <p>Biaya ini mencakup pelaksanaan acara wisuda, termasuk penyewaan tempat, dekorasi, dan konsumsi.</p>
            <p><strong>Jumlah:</strong> Rp 1.000.000</p>
          </>
        )}
      </div>
      <div className="biaya-summary">
        <h2>Total Biaya</h2>
        <p><strong>Jumlah Total:</strong> Rp 2.000.000</p>
      </div>
    </div>
  );
}

export default Biaya;
