import React from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => (
  <Router>
    <div>
      <Route path="/" component={ Home } exact />
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
      <Link to="/"><p>home</p></Link>
      <Link to="/about"><p>about</p></Link>
      <Link to="/contact"><p>contact</p></Link>
    </div>
  </Router>
);

export default Nav;