import React, { Component } from "react";
import { ProblemBlock } from "./ProblemBlock";
export class ContestProblems extends Component {
  constructor() {
    super();
    this.state = {
      conn_name: "March Long Challenge"
    };
  }

  render() {
    return (
      <div className="shadow m-2 p-1">
        <div className="d-flex align-items-center" style={{ width: "500px" }}>
          <h3>Contest : </h3>
          <h5>{this.state.conn_name} </h5>
        </div>
        <ProblemBlock name="chota Bheem" />
        <ProblemBlock name="Ben 10" />
        <ProblemBlock name="Mr. Bean" />
      </div>
    );
  }
}
