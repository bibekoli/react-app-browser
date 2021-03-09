import React from "react";
import "./App.css";
import thumb from "../assets/images/main.jpg";

//react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Import Components
import Nav from "./Nav";
import About from "./About";

const App = () => (
  <Router>
  <div>
    <Route path="/about" component={About} />
    <Route path="/nav" component={Nav} />
    <h1 className="wow">Hello React!!!!!</h1>
    <Link to="/about">
     <p>click</p>
    </Link>
    <img src={thumb} alt="" />
  </div>
  </Router>
);

export default App;
