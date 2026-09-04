import { useState } from "react";
import "../styles/header.css";

function Header({ score }) {
  console.log("Header");
  const [highScore, setHighScore] = useState(0);
  if (score > highScore) {
    setHighScore(score);
  }
  return (
    <div className="header-container">
      <div className="header">
        <h1>NAMO MEMORY GAME</h1>
        <p>
          Hi Fraands...Try not to click my GIFs more than once to beat the high
          score
        </p>
      </div>
      <div className="score-container">
        <div className="score-card" id="high-score">
          <h2>High Score </h2>
          <p>{highScore}</p>
        </div>
        <div className="score-card" id="score">
          <h2>Score </h2>
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
