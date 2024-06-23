import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Terms from './Terms';
import PendaftaranWisuda from './PendaftaranWisuda';

const Wisuda = () => {
  return (
    <Routes>
      <Route path="/" element={<Terms />} />
      <Route path="form" element={<PendaftaranWisuda />} />
    </Routes>
  );
};

export default Wisuda;
