import React, { Component } from "react";
import Dropdown from "./dropdown.js";
import IncrementStyleModal from "./icrementedStylePopUp.js";
import { CgCloseO } from "react-icons/cg";
import { SiStyleshare } from "react-icons/si";
import { BiReset } from "react-icons/bi";
import "./table.css";
import { Button, Row } from "react-bootstrap";
import axios from "axios";

class tableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incModelShow: false,
      incrementedStyles: {},
      fetchedData: false,
    };
    this.getIncrementedStyles();
  }

  getIncrementedStyles = () => {
    axios
      .get(
        `http://localhost:3000/api/users/getIncrementedStyle/${this.props.idNum}`
      )
      .then((response) => {
        this.setState({
          incrementedStyles: JSON.parse(response.data.data[0].styleData), //JSON.parse(response.data.data),
          fetchedData: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  setIncrementedToZero = () => {
    Object.keys(this.state.incrementedStyles).map((value) => {
      axios
        .put(
          `http://localhost:3000/api/users/resetIncrementedToZero/?styleId=${value}&workerId=${this.props.idNum}`
        )
        .then((response) => {
          console.log("Done");
        })
        .catch((error) => {
          console.log(error);
        });
    });
    window.location.reload(false);
  };

  deleteWorker = () => {
    axios
      .delete(`http://localhost:3000/api/users/${this.props.idNum}`)
      .then((res) => {
        console.warn("done", res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(false);
  };
  disabledButton = () => {
    if (this.props.loggerDetails.status === 3) {
      return true;
    } else {
      return false;
    }
  };

  onHide = () => {
    this.setState({
      incModelShow: false,
    });
  };

  render() {
    return (
      <tr>
        <td>{this.props.idNum}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>
          <Dropdown styles={this.props.styles} />
        </td>
        <Row>
          <IncrementStyleModal
            show={this.state.incModelShow}
            onHide={this.onHide}
            incrementedStyles={this.state.incrementedStyles}
          />
          <div className="iconBar">
            {(() => {
              return (
                <Button
                  disabled={this.disabledButton()}
                  variant="light"
                  className="styleButton"
                  onClick={() => {
                    this.setState({
                      incModelShow: true,
                    });
                  }}
                >
                  <SiStyleshare className="delIcon" />
                </Button>
              );
            })()}
            <span>&nbsp;&nbsp;</span>
          </div>
          <div className="iconBar">
            {(() => {
              return (
                <Button
                  disabled={this.disabledButton()}
                  variant="light"
                  className="styleButton"
                  onClick={() => {
                    this.setIncrementedToZero();
                  }}
                >
                  <BiReset className="delIcon" />
                </Button>
              );
            })()}
            <span>&nbsp;&nbsp;</span>
          </div>
          <div className="iconBar">
            {(() => {
              return (
                <Button
                  disabled={this.disabledButton()}
                  variant="light"
                  className="delButton"
                  onClick={this.deleteWorker}
                >
                  <CgCloseO className="delIcon" />
                </Button>
              );
            })()}
            <span>&nbsp;&nbsp;</span>
          </div>
        </Row>
      </tr>
    );
  }
}

export default tableRow;
