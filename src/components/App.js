import React, { useState } from "react";
import Modale from "../lib/Modale";
import "./index.css";



function App() {

  const [displayModale, setDisplayModale] = useState(false); 
  
  return (
    <div className="App">
      <h1>Ui Modale Kb Example</h1>
    <button id="myBtn"  onClick={() => setDisplayModale(true)}>Open Modal</button>
      <Modale  displayModale={displayModale} onHide={() => setDisplayModale(false)} title="Modal title here" content="Your message here"  />
    </div>
  );
}

export default App;