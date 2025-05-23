import React, { useState, useEffect } from 'react';
import Leaderboard from '../components/Leaderboard/Leaderboard'; // adjust the path as needed
import './Home.css'; // optional, your custom styling
import image from '../assets/images/andornot.png';

function Home() {
  const [leaderboard, setLeaderboard] = useState([]);

  // Load leaderboard from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(stored);
  }, []);

    const resetLeaderboard = () => {
    localStorage.removeItem('leaderboard');
    setLeaderboard([]);
  };

  return (
    <div className="home-page">
    <div className="top-section">
      <section id="welcome-text">
        <h2>Welcome to Boolean || Learning!</h2>


        <p>
          Please feel free to use any of our materials for your own review. 
          We only ask that you sign in using your name, email & then the name
          of your school or studycourse. 
          We will not send you a bunch of junk mail. If we update the
          site with new subject availability we will let everyone know. We also 
          keep a LeaderBoard so you can compare your performance to others.  Thanks!
        </p>

        <button className="reset-button" onClick={resetLeaderboard}>
         LeaderBoard Reset
        </button>

      </section>

  <div className="leaderboard-container">
    <img src={image} alt="andornot" className="background-image" />
    <div className="leaderboard-overlay">
      <Leaderboard leaderboard={leaderboard} />
    </div>
  </div>

    </div>
  </div>
  );
}

export default Home;


