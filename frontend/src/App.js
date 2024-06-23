import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  React.useEffect(() => {
    document.title = 'TechnoGrad';
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
