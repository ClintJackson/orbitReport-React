import satData from "./satData";
import App from "../App.jsx";
import styles from "./styles.module.css"
//map over current value of sat. sat's value is modified by buttons. ergo, it only receives what sat has, and so only has that to map over and display. 
//I tried removing medium to see what happens if the medium button is clicked, but the medium button disappeared lol cuz that's mapped too. The set on app.jsx never received that value to include, and the map on button.jsx never received it to create a button with it.  
const Table = ({ sat }) => {
  const tableData = sat.map((rowData, id) => {
    return (
      
      <tr key = {id}>
        <td>{rowData.name}</td>
      
        <td>{rowData.type}</td>
      
        <td>{rowData.launchDate}</td>
      
        <td >{rowData.operational === true ? "Active" : "Inactive"}</td>
      </tr>
    )
  })

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     
     <tbody>
        {tableData}
     </tbody>
   </table>
  );
};

export default Table;