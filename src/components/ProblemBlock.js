import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class ProblemBlock extends Component {
  constructor() {
    super();
    this.state = {
      name: "Deadly Permutation"
    };
  }
  render() {
    return (
      <div className="mx-auto shadow p-2 m-2 bg-white rounded">
        <NavLink to="/contest/contestname/problem">
          <h5>{this.props.name}</h5>
        </NavLink>
      </div>
    );
  }
}
