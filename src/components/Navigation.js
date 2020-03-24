import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* to the home page as login page */}
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              CodeHunters
            </NavLink>

            {/* to the Contest Code as login page */}
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              strict
              to="/contest/"
            >
              Contest
            </NavLink>

            {/* to the Contest Problems as login page */}
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/problem/"
            ></NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/contest/contestname"
            >
              Contest Problems
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
