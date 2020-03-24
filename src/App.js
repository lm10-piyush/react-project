import React, { Component } from "react";
import "./App.css";
// import { Home } from "./components/Home";
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
      isloggedin: false
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container center">
          <Navigation />

          <Switch>
            <Route path="/" component={Login} exact />
            <Route
              path="/contest"
              exact
              component={this.state.isloggedin ? Contest : Login}
            />
            <Route
              path="/contest/contestname/"
              exact
              component={ContestProblems}
            />
            <Route path="/contest/contestname/problem" component={Problem} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
