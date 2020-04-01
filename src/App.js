import React, { Component } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Contest } from "./components/Contest";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Login } from "./components/Login";
import { Problem } from "./components/Problem";
import { ContestProblems } from "./components/ContestProblems";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isloggedin: false,
      access_token: "1234",
      contest_name: "5678"
    };
    this.params = this.params.bind(this);
    this.updateContestName = this.updateContestName.bind(this);
  }

  params(lg, token) {
    // console.log(token);
    this.setState({
      isloggedin: lg,
      access_token: token
    });
  }

  updateContestName(conn_name) {
    // console.log("cont_name");
    this.setState({
      contest_name: conn_name
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container center">
          <Navigation />

          <Switch>
            <Route
              path="/"
              render={() =>
                this.state.isloggedin == false ? <Login /> : <Home />
              }
              exact
            />
            <Route
              path="/contest"
              exact
              render={() => (
                <Contest fun={this.params} update={this.updateContestName} />
              )}
            />
            <Route
              path="/contest/contestname"
              exact
              render={() => <ContestProblems />}
            />
            <Route
              path="/contest/contestname/problem"
              render={() => <Problem />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
