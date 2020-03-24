import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class Contest extends Component {
  enter() {
    console.log("this is entered");
  }
  render() {
    return (
      <div>
        <h2 className="m3 p-2 d-flex justify-content-center">
          Welcome LM10_Piyush
        </h2>

        <div
          className="mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "300px", border: "1" }}
        >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Contest Code</Form.Label>
              <Form.Control type="text" placeholder="Contest Code" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.alert}>
              Enter
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
