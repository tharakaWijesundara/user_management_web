import React, { Component } from "react";
import axios from "axios";
import "./signInsignUp.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class signUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      idNum: null,
      isAccExist: "",
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        idNum: "",
      },
    };
    var loggedData = localStorage.getItem("userData");
    if (loggedData === null) {
      this.props.history.push("/login/sign-up");
    } else {
      this.props.history.push("/");
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var { firstName, lastName, email, password, idNum } = this.state;
    let head = Object.assign(
      { status: 3 },
      { firstName, lastName, email, password, idNum }
    );

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      axios
        .post("http://localhost:3000/api/users/check/", head)
        .then((res) => {
          console.warn("respose", res);
          if (res.data.exist === 1) {
            console.warn("accval");
            this.setState({ isAccExist: "EXIST" });
          } else {
            this.setState({
              firstName: null,
              lastName: null,
              email: null,
              password: null,
              idNum: null,
              isAccExist: "",

              formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                idNum: "",
              },
            });
            this.props.handleSuccessfulCreateAcc();
          }

          console.warn("state", this.state);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "idNum":
        formErrors.idNum =
          value.length < 7 ? "ID number should have 6 numbers" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="h1">Create Account</h1>
          <form className="form" onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label className="label" htmlFor="firstName">
                First Name
              </label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : "input"}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label className="label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : "input"}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="idNumber">
              <label className="label" htmlFor="idNumber">
                ID Number
              </label>
              <input
                className={formErrors.idNum.length > 0 ? "error" : "input"}
                placeholder="ID Number"
                type="text"
                name="idNum"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.idNum.length > 0 && (
                <span className="errorMessage">{formErrors.idNum}</span>
              )}
            </div>
            <div className="email">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className={formErrors.email.length > 0 ? "error" : "input"}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className={formErrors.password.length > 0 ? "error" : "input"}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              {this.state.isAccExist.length > 1 && (
                <span className="errorMessage">There exist an account</span>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default signUpForm;
