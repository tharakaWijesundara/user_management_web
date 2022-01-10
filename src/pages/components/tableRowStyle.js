import React, { Component } from "react";
import "./table.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import ChangeStyle from "../components/changeStyle.js";

class styleRow extends Component {
  constructor(props) {
    super(props);
    this.state = { ModalShow: false };
  }

  deleteStyle = () => {
    axios
      .delete(`http://localhost:3000/api/users/styles/${this.props.name}`)
      .then((res) => {
        console.warn("done", res);
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(false);
  };

  render() {
    let ModalClose = () => this.setState({ ModalShow: false });
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.id}</td>
        <td>{this.props.stich}</td>
        <td>{this.props.error}</td>
        <td>{this.props.prop4}</td>
        <td>{this.props.prop5}</td>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="iconBar">
            {(() => {
              return (
                <Button
                  variant="light"
                  className="delButton"
                  onClick={this.deleteStyle}
                >
                  <CgCloseO className="delIcon" />
                </Button>
              );
            })()}
          </div>

          <div className="iconBar">
            {(() => {
              return (
                <div>
                  <Button
                    className="editButton"
                    onClick={() => this.setState({ ModalShow: true })}
                  >
                    <AiFillEdit className="delIcon" />
                  </Button>
                  <ChangeStyle
                    name={this.props.name}
                    id={this.props.id}
                    stich={this.props.stich}
                    error={this.props.error}
                    prop4={this.props.prop4}
                    prop5={this.props.prop5}
                    show={this.state.ModalShow}
                    onHide={ModalClose}
                    refresh={this.props.refresh}
                  />
                </div>
              );
            })()}
          </div>
        </div>
      </tr>
    );
  }
}

export default styleRow;
