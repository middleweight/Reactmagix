import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var magician = {
  name: "Hoodini",
  skill: "Escape"
};

function App() {
  return (
    <div className="App">
      <h1>{magician.name}</h1>
      <h2>{magician.skill}</h2>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
