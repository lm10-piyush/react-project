import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      passwrd: "",
      isloggedin: false
    };
    this.handler = this.handler.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  //------To set the value at the fields--------------
  handler(event) {
    console.log("Handler");
    const { value, name } = event.target;
    //it will help to set the multiple input fields
    //becuase in the element, I set the value as value = this.set.....
    this.setState({ [name]: value });
  }

  //----------It will run when form submits------------
  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.user);
    console.log(this.state.passwrd);
    let formData = new FormData();
    //on server side the input field will be knows as (key, pair)
    formData.append("user", this.state.user);
    formData.append("passwrd", this.state.passwrd);

    //--------------setting url-----------------
    const url = "http://localhost/Test-Project/src/public/ ";
    axios
      .post(url, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    // console.log("form submit");
  }

  render() {
    return (
      <div>
        <h2 className="m3 p-2 d-flex justify-content-center">Welcome Coder</h2>

        <div
          className="mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "300px", border: "1" }}
        >
          {/* ----------------------form ------------------- */}
          <Form onSubmit={this.formSubmit} method="post">
            <Form.Group>
              <Form.Label>Login ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Login ID"
                name="user"
                value={this.state.user}
                onChange={this.handler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="passwrd"
                value={this.state.passwrd}
                onChange={this.handler}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>

          <p>
            {this.state.user} {this.state.passwrd}
          </p>
        </div>
      </div>
    );
  }
}
