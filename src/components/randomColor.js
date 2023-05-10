// import bootstrap and useState

import { useState } from "react";
import { Button } from "react-bootstrap";

//create functional component with 'rfce' shortcut
// build the 3cm by 3cm color box with <span> and css  + button
// add useState const variable + dummy color test + create function to change color at random
//

import React from "react";

function RandomColor() {
  const [color, setColor] = useState("rgb(200,300,400)");

  function randomC() {
    return (
      "rgb" +
      "(" +
      ((Math.floor(Math.random() * 9) + 1) * 100).toString() +
      "," +
      ((Math.floor(Math.random() * 9) + 1) * 100).toString() +
      "," +
      ((Math.floor(Math.random() * 9) + 1) * 100).toString() +
      ")"
    );
  }

  let changeColor = () => {
    setColor(randomC());
  };

  return (
    <>
      <h3>All Random</h3>
      <span
        className="border border-warning colorbox"
        style={{ backgroundColor: color }}
      ></span>
      <br></br>
      <Button onClick={changeColor}>Click here to change color</Button>
    </>
  );
}

export default RandomColor;
