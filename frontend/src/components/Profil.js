import React, { useState } from 'react';
import './Profil.css';

const Profil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Annisa',
    email: 'annisa@gmail.com',
    contact: '081234567890',
    address: 'Padang',
    photo: '/public/images/user.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated profile data to your server
  };

  return (
    <div className="profil-container">
      <h1>Profil Saya</h1>
      <div className="profil-photo">
        <img src={profile.photo} alt="User" />
      </div>
      <div className="profil-details">
        <div className="profil-field">
          <label>Nama:</label>
          {isEditing ? (
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
          ) : (
            <span>{profile.name}</span>
          )}
        </div>
        <div className="profil-field">
          <label>Email:</label>
          {isEditing ? (
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          ) : (
            <span>{profile.email}</span>
          )}
        </div>
        <div className="profil-field">
          <label>Kontak:</label>
          {isEditing ? (
            <input type="text" name="contact" value={profile.contact} onChange={handleChange} />
          ) : (
            <span>{profile.contact}</span>
          )}
        </div>
        <div className="profil-field">
          <label>Alamat:</label>
          {isEditing ? (
            <textarea name="address" value={profile.address} onChange={handleChange} />
          ) : (
            <span>{profile.address}</span>
          )}
        </div>
      </div>
      <div className="profil-actions">
        {isEditing ? (
          <button onClick={handleSave}>Simpan</button>
        ) : (
          <button onClick={handleEditToggle}>Edit Profil</button>
        )}
      </div>
    </div>
  );
};

export default Profil;
