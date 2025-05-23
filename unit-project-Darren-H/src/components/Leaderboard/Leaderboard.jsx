import React from 'react';
import './Leaderboard.css';
import albertTongue from '../../assets/images/Albert__tongue.jpg'; // Adjust path if needed

const Leaderboard = ({ leaderboard, showImage = false }) => {
  return (
<div className="leaderboard-body">
  <div className="leaderboard-layout">
    <div className="quote-box">
      <p className="einstein-quote">
        "Logic will get you from A to B, imagination will take you everywhere." — Albert Einstein
      </p>
    </div>

    <section className="leaderboard">
      <h2>Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p>No scores yet. Be the first!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>School Name</th>
            </tr>
          </thead>
          <tbody>
            {[...leaderboard]
              .sort((a, b) => b.score - a.score)
              .slice(0, 5)
              .map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                  <td>{entry.schoolName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  </div>

  <div className="albert-image">
    {showImage && (
      <img
        src={albertTongue}
        alt="Albert Einstein being silly"
        className="albert-img"
      />
    )}
  </div>
</div>

  );
};

export default Leaderboard;

