import React, { Component } from "react";
import "../../src/App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import SignUpForm from "../pages/signUpForm.js";
import SignInForm from "../pages/signInForm.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggerDetails: null, // idNum: 1500, firstName: "first1", lastName: "last1", email: "first1last1@gmail.com", status: 1
      loggedInStatus: 0,
    };
    this.state.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.state.handleSuccessfulCreateAcc = this.handleSuccessfulCreateAcc.bind(
      this
    );
  }
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }
  handleSuccessfulCreateAcc() {
    this.props.history.push("/login");
  }
  getLoggerData = (data) => {
    console.warn("updating", data);
    var { idNum, firstName, lastName, email, status } = data;
    this.setState({
      lg: {
        idNum: idNum,
        firstName: firstName,
        lastName: lastName,
        email: email,
        status: status,
      },
    });
  };

  render() {
    return (
      <Router>
        <div className="App__Form">
          <div className="FormTitle">
            <NavLink
              exact
              to="/login"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to="/login/sign-up"
              activeClassName="FormTitle__Link--Active"
              className="FormTitle__Link"
            >
              Sign Up
            </NavLink>
          </div>
          <Route
            exact
            path="/login/sign-up"
            render={(props) => (
              <SignUpForm
                {...props}
                handleSuccessfulCreateAcc={this.state.handleSuccessfulCreateAcc}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <SignInForm
                {...props}
                handleSuccessfulAuth={this.state.handleSuccessfulAuth}
              />
            )}
          />
          /
        </div>
      </Router>
    );
  }
}
export default Home;
