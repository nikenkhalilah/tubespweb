import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, make API call)
    navigate('/login');
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return null;
}

export default Logout;
