import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // adjust if path differs
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  // ✅ Destructure everything from context
  const { isAuthenticated, userName, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/SignUpForm');
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Show welcome message if logged in */}
        {isAuthenticated && <span className="welcome-message">Welcome to Boolean || Learning, <b>{userName}</b>!</span>}
        {!isAuthenticated && <span>Welcome to Boolean || Learning -- Please sign in:</span>}

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          {!isAuthenticated ? (
            <li><Link to="/SignUpForm">SignIn</Link></li>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;






