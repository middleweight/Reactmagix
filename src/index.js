import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var magician = {
  name: "Hoodini",
  skill: "Escape",
  location: "",
  avatar: "dini.png"
};

var assistant = {
  name: "Jessie",
  skill: "Dance",
  location: "Liverpool",
  avatar: "girl.png"
}

function getLocation(location) {
if(location) {
  return location
} else {
  return "Mystery"
}
}

function magicianPic (avatar) {
 if (avatar) {
   return <p> Picture: {avatar} </p>
 }
}
// turnery operator
function App() {
  return (
    <div className="App">
      <h1>{magician.name ? magician.name : "Name hidden"}</h1>
      <h2>{magician.skill}</h2>
      <h3>{getLocation(magician.location)} </h3>
      {magicianPic(magician.avatar)}
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
