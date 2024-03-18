import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner.jsx";
import { useState } from 'react';
import satData from "./components/satData.jsx"
function App() {

    const[sat, setSat] = useState(satData);
    //value of sat is set to "satData", which is full data set. "All orbits" button. 
    //this may be same issue had in practice code. need to set to default if "all" button clicked. 
    const displaySats = [...new Set(satData.map((data)=> data.orbitType))]; 
     //creates new Set, filled with data.orbitTypes (only 3 options). 
     //not sure how the code processes this, 
        //inner to outer, or outer to inner? 
            //Creates new set then populates, or collects and temp stores the collection in memory, then creates new Set when completed mapping, then set does its "no duplicates" thing?
            //or something like new set, satData.map, data.orbit type, retrieve, return to set, set does it's "no duplicates" processing, then repeat mapping til completed? 
      //no idea. probably doesn't matter here anyways.  
      //**also, the spreader in there converts the set to array? Stack says it can do that, MDN says nothing about "Set" here, though possibly related to it's ability to combine arrays, which is mentioned. Used instead of array.prototype.unshift() */
    const filterByType = (currentType)=>{//this may be a case of bad naming conventions. currentType is a value being passed when the filterByType is called, which is a button, which is using the orbitTypes. So, current type is one of 4 options? Not sure how "All" would work here. 
      const displaySats = satData.filter((newSatDisplay)=> {
          //A) satData.filter **receives** the result of newSatDisplay.orbitType === currentType, which is passed through to satData via the .filter method...but that should just return true or false, right? DisplaySats stores these? Where did currentType get it's value? Wherever it's called? idk.
        return newSatDisplay.orbitType === currentType;
      });
      setSat(displaySats);
      //B) wild. Anyways, setSat is used to update the state var "sat", with displaySats...which, is the trues and falses? I'm so glad I didn't have to come up with this. hmm and table uses sat...it displays the values of sat...table maps over sat to display, rather than satData...change in state triggers re-render of element where (this may be wrong) the state variable is used. 
  }
  return (
    <div>
      
      <Banner/>
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}/> 
      <Table sat = {sat} />
      
    </div>
  );
}

export default App;
