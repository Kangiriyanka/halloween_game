import React from "react";
import {useState} from 'react'
import Scorebox from "./Scorebox.jsx"
import Questions from "./Questions.jsx"



function Scoreboard(props) {

  const [points, setPoints] = useState(0); // Initialize points state
  const [value, setValue] = useState(10)
  const updatePoints = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
   
     <h1 className= "halloween-game"> Halloween Battle </h1>
      <ul className="teamContainer">
        {props.teamData.map((team, index) => (
          <div key={index} className="team">

            <div className="team-name">{team}</div>
         
            <Scorebox teamName= {team} value={value}/>

            
          </div>
        ))}
      </ul>

      {/* Update the score based on the current question's points */}
      <Questions setValue= {updatePoints} />
    </div>
  );
}

export default Scoreboard;
