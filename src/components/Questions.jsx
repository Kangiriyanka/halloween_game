import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/styles/questions.css';
import questions from '../assets/data/questions.js';

/**
 * Questions Component
 * 
 * Displays a list of trivia questions for a Halloween-themed game.
 * Allows users to navigate between questions and updates the score based on the current question's points.
 * 
 * Props:
 * - setValue (function): Callback to update the score/points when the question changes.
 * 
 * Features:
 * - Animated transitions using framer-motion.
 * - "Next" and "Previous" buttons to navigate through questions.
 * - Displays the current question, its text, and its point value.
 * 
 * Usage:
 * <Questions setValue={setValueFunction} />
 */


function Questions({ setValue }) {


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);



  const nextQuestion = () => {
    const newIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);
    setValue(questions[newIndex].points); 
  };

  const prevQuestion = () => {
    const newIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(newIndex);
    setValue(questions[newIndex].points); 
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
    <motion.div
    className="questions"
    key={currentQuestionIndex}
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
  >
      <h4 className="triviaQuestion">Question {currentQuestionIndex + 1}</h4>
      <p className="triviaText">{currentQuestion.text}</p>
      
      <p className="triviaPoints">Points: {currentQuestion.points}</p>
      </motion.div>
      <button className="halloween-button next" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
        Previous Question
      </button>
      <button  className="halloween-button next"onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
        Next Question
      </button>
      </div>
  );
}

export default Questions;
