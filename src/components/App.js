import React from "react";
import "./App.css";
import thumb from "../assets/images/main.jpg";

//Import Components
import Nav from "./Nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="wow">Hello React!!!!!</h1>
    <img src={thumb} alt="" />
  </div>
);

export default App;
