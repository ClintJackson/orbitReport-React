import satData from './satData.jsx';
import { useState } from 'react';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return(
  <div>
  {displaySats.map((sat, id)=> (
    //mapping over displaySats, which is the 3 orbit types only, no repeats. 
    //filterByType is called on click, with the argument "sat" the value of which is stored by the button itself. 
      <button onClick = {()=> filterByType(sat)} key = {id}> 
        {sat} Orbit
      </button>    
    ))}

    <button onClick = {()=>setSat(satData)}> All Orbit </button>
    {/* sets sat to full satData*/}
  </div>  
  );
};

export default Buttons;