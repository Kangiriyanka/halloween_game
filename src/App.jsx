import './App.css';

import TeamMaker from "./components/TeamMaker.jsx"
import Scoreboard from './components/Scoreboard.jsx';
import React from "react";
import {useState} from 'react'


function App() {
  // State to store team names and data
  const [teamData, setTeamData] = useState([]);
  // State to track if quiz has started
  const [quizStarted, setQuizStarted] = useState(false);
 
  /**
   * Handles the transition from team setup to quiz phase
   * Called when the Start Quiz button is clicked
   */
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  /**
   * Callback function passed to TeamMaker
   * Receives and stores team data, then starts the quiz
   * @param {string[]} data - Array of team names from TeamMaker
   */
  const receiveDataFromTeamMaker = (data) => {
    setTeamData(data);
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on quiz state */}
      {quizStarted ? (
        // Quiz phase - show scoreboard
        <div>
          <Scoreboard teamData={teamData} />
        </div>
      ) : (
        // Setup phase - show team maker
        <TeamMaker
          onDataReceived={receiveDataFromTeamMaker}
          onStartQuiz={handleStartQuiz}
        />
      )}
    </div>
  );
}

export default App;
