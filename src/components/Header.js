import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../services/users';

export default function Header({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
    history.push('/');
  };
  return (
    <div>
      {currentUser &&
        <button onClick={handleLogout}>Log Out</button>
      }
    </div>
  );
}
