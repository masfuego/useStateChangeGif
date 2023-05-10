import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import gifFunction from "./components/gifFunction";
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import ColorBox from "./components/primaryColorBox";
import RandomColor from "./components/randomColor";
import GifFunction from "./components/gifFunction";
// import { useState } from "react";

// create interface (navbar, button, box of color)
// use useState to change color of box randomly
// or between three gif's

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Changing Gif's</Navbar.Brand>
          <Nav>
            <Nav.Item>Created by MasFuego</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Container className="d-flex flex-row justify-content-center">
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <ColorBox />
            <br></br>
          </Col>
        {/* </Row>
      </Container>
      <Container className="d-flex flex-row justify-content-center">
        <Row> */}
          <Col className="d-flex flex-column align-items-center">
            <RandomColor />
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-row justify-content-center">
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <GifFunction />
          </Col>
        </Row>
      </Container>
    </>
  );
}

//1
// Create a new component that renders all random colors:
// create the outline
// code functionality using useState
// code the logic function

//2 create a random gif surrealism selection when pressing button
export default App;
