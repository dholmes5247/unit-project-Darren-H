import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="leaderboard">
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
    </div>
  );
};

export default Leaderboard;
