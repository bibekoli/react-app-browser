import React from "react";
import "./App.css";
import logoImage from "../assets/images/main.jpg";
import Nav from "./Nav";

const App = () => (
  <div>
    <h1 className="header">Hello React!</h1>
    <Nav />
    <img src={ logoImage } alt="Logo Image" />
  </div>
);

export default App;