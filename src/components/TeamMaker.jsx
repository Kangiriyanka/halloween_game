import React from "react";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/teammaker.css';

/**
 * TeamMaker Component
 * A component that handles team creation and setup for a Halloween-themed quiz game.
 * Allows users to select the number of teams and input team names.
 * 
 * @param {Function} onDataReceived - Callback function to send team data to parent component
 * @param {Function} onStartQuiz - Callback function to start the quiz
 */
function TeamMaker({ onDataReceived, onStartQuiz }) {

  // State for tracking if team count has been selected
  const [teamIsSelected, setteamIsSelected] = useState(false);
  // State for storing the number of teams
  const [numTeams, setNumTeams] = useState("");
  // State for storing team names, initialized as empty array of strings for each input field
  const [teamNames, setTeamNames] = useState(Array(numTeams).fill(''));

  /**
   * Sets the number of teams and marks team selection as complete
   * @param {number} num - The number of teams selected
   */
  const teamSetter = (num) => {
    setNumTeams(num);
    setteamIsSelected(true);
  };

  /**
   * Sends the team data to the parent component
   */
  const sendDataToApp = () => {
    onDataReceived(teamNames);
  };

  /**
   * Updates the name of a specific team
   * @param {number} index - The index of the team to update
   * @param {string} newName - The new name for the team
   */
  const handleTeamNameChange = (index, newName) => {
    
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = newName;
    setTeamNames(updatedTeamNames);
  };

  /**
   * Checks if all teams have been named
   * @returns {boolean} True if all teams have names, false otherwise
   */
  const isTeamSetupComplete = () =>
    teamNames.length === numTeams && teamNames.every(name => name.trim() !== '')

  // Generate input fields for team names with animation
  const teamInputs = Array.from({ length: numTeams }, (_, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
    >
      <input
        className="teamNames"
        onChange={(e) => handleTeamNameChange(index, e.target.value)}
        type="text"
        placeholder={`Team ${index + 1}`}
      />
      <br />
    </motion.div>
  ));

  return (
    <div>
      <h1 >Happy Halloween Game</h1>
      <div
  style={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',     // horizontally center children
   // top-aligned (or 'center' for vertical center)
    gap: '10px',
                 // ensures it spans full screen
    padding: '2rem'
  }}
>
      <div id="container">
          <div id="spooky">
            <div id="body">
              <div id="eyes"></div>
              <div id="mouth"></div>
              <div id="feet">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div id="shadow"></div>
      </div>
      <div className="teamSelectorBox">
       

        <h3>How many teams are playing?</h3>

        <ButtonGroup>
          <Button onClick={() => teamSetter(2)} className="teams-button">2</Button>
          <Button onClick={() => teamSetter(3)} className="teams-button">3</Button>
          <Button onClick={() => teamSetter(4)} className="teams-button">4</Button>
          <Button onClick={() => teamSetter(5)} className="teams-button">5</Button>
          <Button onClick={() => teamSetter(6)} className="teams-button">6</Button>
        </ButtonGroup>

        {/* If the team count has been selected, show the team name input fields */}
        {teamIsSelected ? (
          <div>
            <h3>Enter Team Names:</h3>
            {teamInputs}
          </div>
        ) : ""}

        {/* If the team count has been selected and all teams have names, show the start quiz button */}
        {isTeamSetupComplete() && (
        <AnimatePresence>
            <motion.button
              className="ghost-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                sendDataToApp();
                onStartQuiz();
              }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              Start Quiz
            </motion.button>
          </AnimatePresence>
        )}
      
      </div>
      </div>
    </div>
  );
}

export default TeamMaker;