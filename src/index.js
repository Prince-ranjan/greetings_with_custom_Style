//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}!
  </h1>,
  document.getElementById("root")
);
