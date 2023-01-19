//import logo from './logo.svg';
//import './App.css';
import React from "react";

function App() {
  const [person,setPerson]= React.useState(["Zahid","Muneeb","Abid"]);
  return (
    <div className="App">
      <button onClick={()=>{
        let ps=[...person];
        ps.sort()
        setPerson(ps);
      }}>Test sort</button>
      <ul>
      {person.map((person,index)=>(
          <li key={index}>{person}</li>
        ))}     
      </ul>
        
    </div>
  );
}

export default App;
