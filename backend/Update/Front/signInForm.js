import React, { Component } from "react";
import axios from 'axios';
import "./signInsignUp.css";


class signInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // email: null,
            password: null,
            idNum: null,
            valid: null
        };
        var loggedData = localStorage.getItem('userData');

        if (loggedData === null) {
            this.props.history.push("/login");
        } else {
            this.props.history.push("/");
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        var {password, idNum } = this.state;
        let data = Object.assign({}, {password, idNum });
        console.warn("pressed login", data)
        axios.post("http://localhost:3000/api/users/logger", data)
            .then(res => {
                if (res.data.dataExist === 1) {

                    // let dataObj = Object.assign([], res.data.data)
                    localStorage.setItem('userData', JSON.stringify((res.data.data)[0]))

                    this.props.handleSuccessfulAuth((res.data.data)[0])
                    this.setState({ valid: null })

                    console.warn("respose", res)

                } else {
                    this.setState({ valid: 0 })
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
    };

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1 className="h1">Log In</h1>
                    <form className="form" onSubmit={this.handleSubmit} noValidate>

                        <div className="idNumber">
                            <label className="label" htmlFor="idNumber">ID Number</label>
                            <input
                                className="input"
                                placeholder="ID Number"
                                name="idNum"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* <div className="email">
                            <label className="label" htmlFor="email">Email</label>
                            <input
                                className="input"
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div> */}
                        <div className="password">
                            <label className="label" htmlFor="password">Password</label>
                            <input
                                className="input"
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="logIn">
                            <button type="submit">Log In</button>
                            {this.state.valid === 0 && (
                                <span className="errorMessage">There is no such account</span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default signInForm;