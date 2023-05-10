import { useState } from "react";
import { Button } from "react-bootstrap";

import React from "react";

function ColorBox() {
  const [color, setColor] = useState("");

  function randomN() {
    return Math.floor(Math.random() * 3) + 1;
  }

  const changePrimaryColor = () => {
    let x = randomN();
    if (x == 1) {
      x = "yellow";
    } else if (x == 2) {
      x = "red";
    } else {
      x = "blue";
    }
    setColor(x);
  };

  return (
    <>
      <h3>Change primary</h3>
      <span
        className="border border-warning colorbox"
        style={{ backgroundColor: color }}
      ></span>
      <br></br>
      <Button onClick={changePrimaryColor}>Click here to change color</Button>
    </>
  );
}

export default ColorBox;
