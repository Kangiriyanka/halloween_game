import React, { useState, useRef  } from 'react';
import BatsuPopUp from './BatsuPopup.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import {incrementFiles, batsuFiles,attackFiles } from '../assets/audio/audiofiles.js'
function Scorebox(props) {
  

  // The current audio file being played.
  // Using useRef to avoid re-rendering the component when the audio source changes.
  const incrementScoreAudioRef = useRef(null);
  const attackAudioRef= useRef(null);
  const batsuAudioRef= useRef(null);
  const [score, setScore] = useState(0);
  const [showBatsuPopUp, setShowBatsuPopUp] = useState(false);
  const [animate, setAnimate] = useState(false);
  


  const startAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 200); // Clear animation state after a short delay
  };

    // Batsu Game Pop up 
  const openBatsuPopUp = () => {
    const randomAudioSource =
    batsuFiles[
      Math.floor(Math.random() * batsuFiles.length)
    ];
 

  batsuAudioRef.current.src = randomAudioSource
  batsuAudioRef.current.play();
    setShowBatsuPopUp(true);
  };

  const closeBatsuPopUp = () => {
    setShowBatsuPopUp(false);
  };

  // Increment score by the value of the question 

  const incrementScore = () => {
    const randomAudioSource =
      incrementFiles[
        Math.floor(Math.random() * incrementFiles.length)
      ];

   
    incrementScoreAudioRef.current.src = randomAudioSource
    incrementScoreAudioRef.current.play();
    setScore(score + props.value);

    startAnimation()
  };

  const decrementScore = () => {
    if (score > 0) {
      setScore(score - props.value);
    }

    startAnimation()
  };

  const loseDouble = () => {

    const randomAudioSource =
    attackFiles[
      Math.floor(Math.random() * attackFiles.length)
    ];


  attackAudioRef.current.src = randomAudioSource
  attackAudioRef.current.play();
    if (score > 0) {
      setScore(score - props.value);
    }

    startAnimation()
  };

  // Attack the player and decrement score
  // The player loses half the value of the question's points
  const attack = () => {

    const randomAudioSource =
      attackFiles[
        Math.floor(Math.random() * attackFiles.length)
      ];

    
    attackAudioRef.current.src = randomAudioSource
    attackAudioRef.current.play();
    if (score  < 0) {
      setScore(0);
    }
    else if (score> 0) {
      setScore(score-Math.round(props.value/2))
      if (score <0 ) {
        setScore(0)
      }
    }

    startAnimation()
    
  };

  

  return (
    <div className="score">
    
    <motion.p
        style={{ fontSize: 50 }}
        initial={{ opacity: 0, y: -20 }}
        animate={animate ? { opacity: 1, y: 10 , x: 10} : { opacity: 1, y: 10 }}
      >
        Your Score: {score}
      </motion.p>
      <button  className="halloween-button "onClick={incrementScore}>Get Points</button>
      <button  className="halloween-button" onClick = {loseDouble}> Lose points </button>
      <button className="halloween-button" onClick={openBatsuPopUp}>Batsu Time</button>
      <button  className="halloween-button" onClick = {attack}> Attack </button>
      {showBatsuPopUp && <BatsuPopUp onClose={closeBatsuPopUp} />}
      <audio ref={incrementScoreAudioRef} />
      <audio ref={attackAudioRef} />
      <audio ref={batsuAudioRef} />
   
    </div>

    
  );
}

export default Scorebox;