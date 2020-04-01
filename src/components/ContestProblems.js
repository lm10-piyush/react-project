import React, { Component } from "react";
import { ProblemBlock } from "./ProblemBlock";
export class ContestProblems extends Component {
  constructor() {
    super();
    this.state = {
      conn_name: "Loading...",
      code: "",
      token: "",
      status: "",
      username: "sample"
    };
  }

  async componentDidMount() {
    //-------------------get the token-------------------
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
    const url1 = "https://reactjs-slim.000webhostapp.com/contest.json";
    await fetch(url1)
      .then(response => response.json())
      .then(res => {
        this.setState({ code: res[0]["code"] });
        return res;
      })
      .catch(err => console.log(err));

    //------------------ fetch the problem list ---------------------------

    var end = "http://reactjs-slim.000webhostapp.com/src/public/contact.php/";
    var path =
      "http://reactjs-slim.000webhostapp.com/src/public/contact.php/problemList?code=" +
      this.state.code +
      "&token=" +
      this.state.token;

    let data = await fetch(path)
      .then(response => response.json())
      .then(res => {
        console.log("res");
        let x = res;
        console.log(x);
        this.setState({
          status: x["status"]
        });
        if (x["status"] != "OK") {
          alert("back to home ");
          window.location.href = "http://localhost:3000";
          // window.location.href =
            // "https://relaxed-montalcini-46801b.netlify.com/";
        }

        return res;
      })
      .catch(err => {
        alert("back to home ");
        window.location.href = "http://localhost:3000";
        // console.log("this is error");
        // window.location.href = "https://relaxed-montalcini-46801b.netlify.com/";

        console.log(err);
      });
    console.log("problem Name=");
    console.log(
      data["result"]["data"]["content"]["problemsList"][0]["problemCode"]
    );

    let list = data["result"]["data"]["content"]["problemsList"];
    let comps = list.map(item => (
      <ProblemBlock
        name={item.problemCode}
        submission={item.successfulSubmissions}
        code={data["result"]["data"]["content"]["code"]}
      />
    ));
    this.setState({
      conn_name: data["result"]["data"]["content"]["name"],
      code: data["result"]["data"]["content"]["code"],
      probs: comps
    });

    //------------------users-----------------------------------
    const path_user = end + "/me?token=" + this.state.token;
    await fetch(path_user)
      .then(response => response.json())
      .then(res => {
        this.setState({
          username: res["result"]["data"]["content"]["username"]
        });
        // window.location.href = "https://relaxed-montalcini-46801b.netlify.com/";
        window.location.href = "http://localhost:3000";

        return res;
      })
      .catch(err => {
        alert("back to home page (user)");
        window.location.href = "http://localhost:3000";
        // window.location.href = "https://relaxed-montalcini-46801b.netlify.com/";
      });
  }

  render() {
    return (
      <div className="shadow m-2 p-1">
        <div className="d-flex align-items-center" style={{ width: "500px" }}>
          <div>
            <h3>Contest : {this.state.conn_name}</h3>
            <div
              className="d-flex align-items-center "
              style={{ width: "300px" }}
            >
              <h4>{this.state.username}</h4>
              <h4 className="mx-4">Ranking</h4>
              <div className="float-left">
                <h4>Timer</h4>
              </div>
            </div>
          </div>
        </div>
        {this.state.probs}
      </div>
    );
  }
}
