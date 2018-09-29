import React from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (

  <Router>
    <div className="navbar d-flex justify-content-between px-5 ">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/saved" component={Saved} />
    </div>
  </Router>

);

export default App;
