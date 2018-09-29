import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "../Grid";
import "./Navbar.css";

const Nav = () => (
  <Row >
    <Col size="md-12">
      <nav className="navbar navbar-dark topnav">
        <span>
          <NavLink className ="navItem" activeStyle={{ color: 'white' }} to="/">Home</NavLink>
        </span>
        <span>
          <NavLink className ="navItem"  activeStyle={{ color: 'white' }} to="/saved">Saved</NavLink>
        </span>
      </nav>
    </Col>
  </Row>
);

export default Nav;
