import React from 'react';
import './Jadwal.css';

const Jadwal = () => {
  return (
    <div className="jadwal-container">
      <h1>Jadwal Wisuda</h1>
      <table className="jadwal-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Acara</th>
            <th>Lokasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 Juli 2024</td>
            <td>Pengambilan Toga</td>
            <td>Aula Kampus</td>
          </tr>
          <tr>
            <td>3 Juli 2024</td>
            <td>Gladi Resik</td>
            <td>Lapangan Utama</td>
          </tr>
          <tr>
            <td>5 Juli 2024</td>
            <td>Acara Wisuda</td>
            <td>Gedung Serbaguna</td>
          </tr>
        </tbody>
      </table>
      <div className="calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia/Jakarta"
          style={{ border: 0 }}
          width="600"
          height="400"
          frameBorder="0"
          scrolling="no"
          title="Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export default Jadwal;
