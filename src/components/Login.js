import React, { Component } from "react";
export class Login extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const url1 = "https://reactjs-slim.000webhostapp.com/auth.php";
    window.location.href = url1;
  }
  render() {
    return (
      <div>
        <h2 className="m3 p-2 d-flex justify-content-center">Welcome Coder</h2>

        <div
          className="mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "300px", border: "1" }}
        >
          <div style={{ textAlign: "center" }}>
            <h5> Redirecting to CodeChef</h5>
          </div>
        </div>
      </div>
    );
  }
}
