import React, { Component } from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../App.css";
// import Markdown from "react-markdown";
// import MDReactComponent from "markdown-react-js";
import ReactHtmlParser, { mdReact } from "react-html-parser";
const ReactMarkdown = require("react-markdown/with-html");
var ReactDOMServer = require("react-dom/server");
var HtmlToReactParser = require("html-to-react").Parser;
// var Latex = require("react-latex");
// import { parse, HtmlGenerator } from "latex.js";
export class Problem extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      token: "",
      name: "",
      statement: "",
      status: ""
    };
  }

  async componentDidMount() {
    //-----------------------get the token-------------------------------
    const url = "https://reactjs-slim.000webhostapp.com/data.json";

    let data1 = 0;
    data1 = await fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          token: res[0]["access_token"],
          isloggedin: true
        });
        return res;
      })
      .catch(err => {
        console.log("error");
        console.log(err);
      });
    console.log("token");
    console.log(this.state.token);

    //-------------for contest code--------------------------
    await fetch("https://reactjs-slim.000webhostapp.com/contest.json")
      .then(response => response.json())
      .then(res => {
        this.setState({ code: res[0]["code"] });
        return res;
      })
      .catch(err => console.log(err));

    //-----------------for problem code----------------
    await fetch("https://reactjs-slim.000webhostapp.com/problemData.json")
      .then(response => response.json())
      .then(res => {
        this.setState({ name: res[0]["problemCode"] });
        return res;
      })
      .catch(err => console.log(err));
    //-----------------for problem statement----------------
    var end =
      "http://reactjs-slim.000webhostapp.com/src/public/contact.php/problemdetails?";
    var path =
      end +
      "token=" +
      this.state.token +
      "&code=" +
      this.state.code +
      "&name=" +
      this.state.name;
    let data = await fetch(path)
      .then(response => response.json())
      .then(res => {
        console.log("res");
        let x = res;
        console.log(x);
        this.setState({ status: res["status"] });
        if (this.state.status != "OK") {
          alert("back to home page");
        }

        return res;
      })
      .catch(err => {
        alert("back to home page(error)");
        window.location.href = "http://localhost:3000";
        // window.location.href = "https://relaxed-montalcini-46801b.netlify.com/";
        console.log("this is error");
        console.log(err);
      });

    console.log(data);
    this.setState({
      statement: data["result"]["data"]["content"]["body"]
    });
  }

  render() {
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(this.state.statement);
    var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

    return (
      <div>
        <h4 className=" mx-auto shadow p-3 mb-3 flex">
          Problem: {this.state.name}
        </h4>
        <div className="shadow mx-auto p-3 mb-3 flex">
          <h5 className="p-2 m-0">Problem statement:</h5>
          {/* <ReactMarkdown source={reactElement} /> */}
          {/* <MDReactComponent text={reactElement} /> */}
          {/* <Latex >{this.state.statement}</Latex> */}
          {/* <Markdown source={reactElement} /> */}
          {reactElement}
        </div>
        <div className="mb-3" style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Dropdown className="m-3">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              run
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <textarea value="fdf" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
