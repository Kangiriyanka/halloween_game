import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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

const questions = [
        { text: 'How do you say "Obake" in English', points: 500 },
        { text: 'How do you say "Chi" in English', points: 100 },
        { text: 'What food do vampires hate?', points: 500 },
        { text: 'What was my costume last year?', points: 1200 },
        { text: 'Trick or ____? ', points: 500 },
        { text: 'True or False? Candy is not a healthy food.', points: 500 },
        { text: 'What country did Halloween start in? [Japan, Ireland, USA] ' , points: 600 },
        { text: 'WHat do witches ride on? ', points: 600 },
        { text: 'What fruits are bobs? ', points: 1000 },
        { text: 'Where is Ireland? ', points: 500 },
        { text: 'What sweets does Joe like? [Choco, Potato Chips, Ice Cream] ', points: 1300 },
        { text: 'How many calories in a large red delicious apple ? Closest teams answer wins', points: 2000 }, 
        { text: 'Translate this into English: Ame ha amai desu ', points: 800 },
        { text: 'What animal do witches like? ', points: 500 },
        { text: 'What  do witches make? ', points: 700 },
        { text: 'Write 5 halloween words in 30 seconds? ', points: 900 },
        { text: 'What  do witches make? ', points: 600 },
        { text: 'What colour is Frankenstein (2) ', points: 1300 },
        { text: 'What colours  are for  Halloween ', points: 800 },
        { text: 'What colour are green mummies ', points: 1000 },
        { text: 'What year did we hear the first trick or treat? [1927 - 1940- 1965] ', points: 1000 },
        { text: 'What Latin country also has a similiar Halloween Holiday? [Mexico, Egypt, Canada] ', points: 1000 },
        { text: 'What can bats do? ', points: 800 },
      
        
      
        
      ];
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
