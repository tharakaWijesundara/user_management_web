import React, { Component } from "react";
import "../../src/App.css";
import axios from "axios";

import StartPage from "../pages/startPage.js";
import { Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normalSupervisors: null,
      headSupervisors: null,
      loggedInStatus: false,
      //loggerDetails: { idNum: 1500, firstName: "first1", lastName: "last1", email: "first1last1@gmail.com", status: 1 },
      loggerDetails: null,
      workers: null,
      isLoadedWorkers: false,
      isLoadedHeads: false,
      isLoadedStyles: false,
      isLoadedStylesNames: false,
      styles: null,
      styleNames: null,
    };

    // if (Object.keys(this.state.loggerDetails).length === 0) {
    //     console.log("no element")
    // }

    if (this.props.loggedData === null) {
      this.state.loggedInStatus = false;
      this.props.history.push("/login");
    } else {
      // this.setState({loggerDetails : loggerDetails})
      this.state.loggerDetails = this.props.loggedData;
      this.state.loggedInStatus = true;
      console.warn("loggeddata", this.state.loggerDetails);
    }
  }

  getData = () => {
    if (this.state.loggedInStatus) {


      //get wrokers
      axios
        .get("http://localhost:3000/api/users/workers")
        .then((response) => {
          this.setState({
            workers: response.data.data,
            isLoadedWorkers: true,
          });
          console.warn("fetchedData", this.state.workers);
        })
        .catch((error) => {
          console.log(error);
        });
      //get supervisors without logger
      axios
        .get(
          `http://localhost:3000/api/users/without/${this.state.loggerDetails.idNum}`
        )
        .then((response) => {
          let headSupervisors = Object.assign([]);
          let normalSupervisors = Object.assign([]);

          response.data.data.map((user) => {
            if (user.status === 2) {
              headSupervisors.push(user);
            } else if (user.status === 3) {
              normalSupervisors.push(user);
            }
            return null;
          });

          this.setState({
            normalSupervisors: normalSupervisors,
            headSupervisors: headSupervisors,
            isLoadedHeads: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      //get styles
      axios
        .get("http://localhost:3000/api/users/getStyles")
        .then((response) => {
          let styles = Object.assign([], response.data.data);
          this.setState({
            styles: styles,
            isLoadedStyles: true,
          });
          console.warn("fetcheStyles", styles);
        })
        .catch((error) => {
          console.log(error);
        });
      //get styles names
      axios
        .get("http://localhost:3000/api/users/getStylesNames")
        .then((response) => {
          let styleNames = Object.assign([], response.data.data);
          this.setState({
            styleNames: styleNames,
            isLoadedStylesNames: true,
          });
          console.warn("fetcheStylesNames", styleNames);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount = () => {
    this.getData();
  };
  refreshPage = () => {
    this.getData();
  };
  logOut = () => {
    localStorage.removeItem("userData");
    window.location.reload(false);
    this.props.history.push("/login");
  };

  render() {
    var isLoadedHeads = this.state.isLoadedHeads;
    var isLoadedWorkers = this.state.isLoadedWorkers;
    var isLoadedStyles = this.state.isLoadedStyles;
    var isLoadedStylesNames = this.state.isLoadedStylesNames;

    if (!this.state.loggedInStatus) {
      return <div>Please Sign In</div>;
    } else if (
      !isLoadedHeads ||
      !isLoadedWorkers ||
      !isLoadedStyles ||
      !isLoadedStylesNames
    ) {
      return <div>......Loading.....</div>;
    } else {
      return (
        <div className="App">
          <div className="logginDetails">
            <p className="loggedName">{`Name : ${this.state.loggerDetails.firstName} ${this.state.loggerDetails.lastName}`}</p>
            <p className="loggeEmail">{`Email : ${this.state.loggerDetails.email}`}</p>
            <p className="loggeIdNum">{`ID number :${this.state.loggerDetails.idNum}`}</p>
            <div className="logOutBtnDiv">
              <Button className="logOutBtn" onClick={this.logOut}>
                {" "}
                Log out
              </Button>
            </div>
          </div>

          <StartPage
            workerDetails={this.state.workers}
            headSupervisors={this.state.headSupervisors}
            normalSupervisors={this.state.normalSupervisors}
            loggerDetails={this.state.loggerDetails}
            styles={this.state.styles}
            stylesNames={this.state.styleNames}
            refresh={this.refreshPage}
          />
        </div>
      );
    }
  }
}
export default Home;
