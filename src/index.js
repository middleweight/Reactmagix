import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var magician = {
  name: "Hoodini",
  skill: "Escape",
  location: ""
};

function getLocation(location) {
if(location){
  return location
} else {
  return "Mystery"
}
}

function App() {
  return (
    <div className="App">
      <h1>{magician.name}</h1>
      <h2>{magician.skill}</h2>
      <h3>{getLocation(magician.location)} </h3>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
