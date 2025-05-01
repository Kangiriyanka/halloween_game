import React, { useState } from 'react';

function BatsuPopup({ onClose }) {
  const [batsuResult, setBatsuResult] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  // Make the spin animation last 3 seconds to mimic loading time.
  const handleSpin = () => {
    setIsSpinning(true);

    setTimeout(() => {
      const results = [
      
        'Gesture A Ghost',
        'Laugh like a witch',
        'Gesture a Zombie',
        '10 bat squats',
        'Say I love Joe 2 times',
        'Jump 10 times',
        'Ride a broom like a witch',
        'Spin 2 times',
        'Make a potion gesture',
        'Say Trick or Treat',
        'Do a scary face',
        'Gesture a Bat',
        'Do an evil laugh',
        'Copy my dance  move',
        'Write Halloween with your eyes closed on the board',
        'Gesture a Black Cat',
        'Say I love (current teacher) 4 times',
        'Apologize to Joe',
        'Apologize to (current teacher)',
        'Do a scorpion pose ',

      ];
      const randomResult = results[Math.floor(Math.random() * results.length)];

      setBatsuResult(randomResult);
      setIsSpinning(false);
    }, 3000); // Adjust the time as needed for your animation
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="batsu-wheel">Please Load the Batsu Game</h2>
        <div className={`wheel ${isSpinning ? 'spinning' : ''}`}></div>
        <button className="halloween-button-load" onClick={handleSpin} disabled={isSpinning}>
          LOAD
        </button>
        {batsuResult && (
          <div className="batsu-result" key={batsuResult}>
            <p className="result-text"> {batsuResult}</p>
          </div>
        )}
        <button className="halloween-button close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BatsuPopup;
