import React, { useState } from 'react';
import './Pengumuman.css';

const announcements = [
  {
    title: 'Pengambilan Toga',
    date: '25 Juni 2024',
    content: 'Pengambilan toga dapat dilakukan mulai tanggal 1 Juli 2024 di Aula Kampus.'
  },
  {
    title: 'Gladi Resik',
    date: '28 Juni 2024',
    content: 'Gladi resik akan dilaksanakan pada tanggal 3 Juli 2024 di Lapangan Utama.'
  },
  {
    title: 'Hari Wisuda',
    date: '1 Juli 2024',
    content: 'Acara wisuda akan berlangsung pada tanggal 5 Juli 2024 di Gedung Serbaguna.'
  },
];

const Pengumuman = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnnouncement = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pengumuman-container">
      <h1>Pengumuman Wisuda</h1>
      {announcements.map((announcement, index) => (
        <div
          key={index}
          className={`announcement-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAnnouncement(index)}
        >
          <div className="announcement-header">
            <h2>{announcement.title}</h2>
            <span>{announcement.date}</span>
          </div>
          {activeIndex === index && (
            <div className="announcement-content">
              <p>{announcement.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pengumuman;
