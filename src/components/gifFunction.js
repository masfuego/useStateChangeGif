import { Button } from "react-bootstrap";
import { useState } from "react";
import { getFID } from "web-vitals";

//'change gif' button randomly from useState and array

function GifFunction() {
  const [gif, setGif] = useState("https://giphy.com/embed/OmK8lulOMQ9XO");
  const [counter, setCounter] = useState(0);

  const increase = () => {
    let z = { counter };
    setCounter((count) => count + 1);
    if (counter == 0) {
      z = "https://giphy.com/embed/3NtY188QaxDdC";
    } else if (counter == 1) {
      z = "https://giphy.com/embed/PWfHC8ogZpWcE";
    } else if (counter == 2) {
      z = "https://giphy.com/embed/xUPGcdy9cg74187mco";
    } else if (counter == 3) {
      z = "https://giphy.com/embed/11dR2hEgtN5KoM";
    } else {
      z = "https://giphy.com/embed/OmK8lulOMQ9XO";
      setCounter(0);
    }
    setGif(z);
  };

  return (
    <>
      <br></br>
      <iframe
        src={gif}
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <br></br>
      <h1>{counter}</h1>
      <Button onClick={increase}>Change Gif</Button>
    </>
  );
}

export default GifFunction;
