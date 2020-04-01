import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProblemBlock extends Component {
  constructor() {
    super();
    this.state = {
      name: "Deadly Permutation"
    };
    // this.handler = this.handler(this);
  }

  async handler(event) {
    //-------------- write into the file---------------------
    await fetch(
      "https://reactjs-slim.000webhostapp.com/problemName.php?code=" +
        this.state.probCode
    );
    console.log("I working");
  }
  componentDidMount() {
    this.setState({
      probCode: this.props.name
    });
  }

  render() {
    return (
      <div className="mx-auto shadow p-2 m-2 bg-white rounded row">
        <div>
          <Link
            onClick={this.handler.bind(this)}
            to="/contest/contestname/problem"
          >
            <h5>{this.state.probCode}</h5>
          </Link>
        </div>
        <div className="mx-auto">
          <h6>sumbissions: {this.props.submission}</h6>
        </div>
      </div>
    );
  }
}
