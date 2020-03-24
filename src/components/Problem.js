import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

export class Problem extends Component {
  constructor() {
    super();
    this.state = {
      code: "Deadly Permutation"
    };
  }
  render() {
    return (
      <div>
        <h4 className=" mx-auto shadow p-3 mb-5 flex">
          Problem: {this.state.code}
        </h4>
        <div className="shadow">
          <h5 className="p-2">Problem statement:</h5>

          <p className="p-2">You are given n denoting number of elements</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
