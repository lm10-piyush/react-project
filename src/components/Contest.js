import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {  Link } from "react-router-dom";

export class Contest extends Component {
  constructor() {
    super();
    this.state = {
      isloggedin: false,
      access_token: "",
      code: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.moveToContest = this.moveToContest.bind(this);
  }
  handleChange(event) {
    const { value } = event.target;
    // this.props.update(value);
    this.setState({
      code: value
    });

  }
  async moveToContest(event) {
    //----------------write into the file------------------
    const path = "https://reactjs-slim.000webhostapp.com/handle.php?code=";
    // const path = url1 + "handle.php?code=";
    await fetch(path + this.state.code);
  }
  async componentDidMount() {
    const url = "https://reactjs-slim.000webhostapp.com/data.json";
    let data = 0;
    data = await fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          access_token: res[0]["access_token"],
          isloggedin: true
        });
        return res;
      })
      .catch(err => {
        alert("refresh or back to home page");
        window.location.href = "http://localhost:3000";
        // window.location.href= "https://relaxed-montalcini-46801b.netlify.com/"

        console.log("error");
        console.log(err);
      });

    console.log("data");
    console.log(this.state.isloggedin);
    // }
    this.props.fun(this.state.isloggedin, this.state.access_token);
    // }
  }

  render() {
    return (
      <div>
        <h2 className="m3 p-2 d-flex justify-content-center">
          Welcome to CodeHunters
        </h2>

        <div
          className="mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "300px", border: "1" }}
        >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contest Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contest Code"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Link to="/contest/contestname">
              <Button
                variant="primary"
                type="submit"
                onClick={this.moveToContest}
              >
                Enter
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}
