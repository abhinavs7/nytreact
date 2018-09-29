import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    className="jumbotron justify-content-between "  >
    <h1 id="jumboHeading">New York Times Article Scrubber</h1>
    <p>Search for and annotate articles of interest</p>  </div>
);

export default Jumbotron;
