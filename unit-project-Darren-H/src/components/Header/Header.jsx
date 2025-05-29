import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

 
  const { isAuthenticated, userName, logout } = useContext(AuthContext); // get from AuthContext: check user logged in, username, and logout function


  // Handle logout: call logout function, navigate to SignUpForm
  const handleLogout = () => {
    logout();
    navigate('/SignUpForm');
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Show welcome message if logged in */}
       {isAuthenticated && (
      <span className="welcome-message">
      <span className="app-title">Welcome to Boolean || Learning</span>
      <br /> 
      <div className="userName"> 
      Good Luck - {userName}!  
      </div>

      </span>
)}

        {!isAuthenticated && (
        <span className="welcome-message">
        <span className="app-title">Welcome to Boolean || Learning</span><br />  <div className="sign-in-prompt">Please sign in to Continue:</div>
        </span>
)}


        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>

{/* Show sign-in or sign-out button based on authentication status */}          
          {!isAuthenticated ? (
            <li><Link to="/SignUpForm">SignIn</Link></li>
          ) : (
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Signout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;






