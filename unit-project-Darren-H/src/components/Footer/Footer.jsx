import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/rubeGoldbergStapler.png';
import './Footer.css';
import { AuthContext } from '../../context/AuthContext'; // adjust if needed

function Footer() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Left side: logo */}
        <div className="footer-left">
          <img src={logo} alt="rube-logo" className="footer-logo" />
        </div>

        {/* Right side: links and text */}
        <div className="footer-right">
          <nav className="footer-links">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quiz">Quiz</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              {!isAuthenticated ? (
                <li><Link to="/SignUpForm">Sign In</Link></li>
              ) : (
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>

          {/* Footer text under links */}
          <p className="footer-text">
            &copy; 2025 Holmes Farm LLC || <b><em>Contact me:&nbsp;&nbsp;</em></b>
            <a href="mailto:dholmes5247@hotmail.com">dholmes5247@hotmail.com</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

