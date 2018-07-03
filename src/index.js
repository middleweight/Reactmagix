import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var magician = {
  name: "Hoodini",
  skill: "Escape",
  location: "",
  avatar: "dini.png",
  dob: 30,
  specials: [1,2,3]
};

var assistant = {
  name: "Jessie",
  skill: "Dance",
  location: "Liverpool",
  avatar: "girl.png",
  dob: 23
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
// 1 turnery operator name
// Logical && operator dob
function App() {
  return (
    <div className="App">
      <h1>{magician.name ? magician.name : "Name hidden"}</h1>
      <h2>{magician.skill}</h2>
      <h3>{getLocation(magician.location)}</h3>
      {magicianPic(magician.avatar)}
      {(magician.dob && magician.dob < 50) && <p>Age: {magician.dob}</p>}

    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
