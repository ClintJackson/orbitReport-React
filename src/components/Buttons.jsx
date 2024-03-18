import satData from './satData.jsx';
import { useState } from 'react';
import styles from "./styles.module.css"
//the css styling was working before I even imported that...not sure why. 
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return(
  <div className="flex-container">
    <button onClick = {()=>setSat(satData)}> All Orbits </button>
    {/* sets sat to full satData*/}
  {displaySats.map((sat, id)=> (
    //mapping over displaySats, which is the 3 orbit types only, no repeats. 
    //filterByType is called on click, with the argument "sat" the value of which is stored by the button itself. 
      <button onClick = {()=> filterByType(sat)} key = {id}> 
        {sat} Orbit
      </button>    
    ))}

    
  </div>  
  );
};

export default Buttons;