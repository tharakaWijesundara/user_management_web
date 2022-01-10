import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Table } from "react-bootstrap";
import TableRowStyle from "./tableRowStyle.js";
import "./table.css";

var styleTypes = [
  "Style name",
  "Style ID",
  "Stich count",
  "Error margin",
  "Prop4",
  "Prop5",
];

class stylesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleDetails: [],
    };
    const styleDetails = Object.assign([], this.props.styles);
    this.state.styleDetails = styleDetails;
  }

  render() {
    return (
      <div className="tab1Table">
        <Table borderless striped>
          <thead>
            <tr>
              {styleTypes.map((name) => {
                return <th>{name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.styleDetails.map((style, index) => {
              return (
                <TableRowStyle
                  key={index}
                  name={style.name}
                  id={style.id}
                  stich={style.stich_count}
                  error={style.error_margin}
                  prop4={style.prop4}
                  prop5={style.prop5}
                  refresh={this.props.refresh}
                ></TableRowStyle>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default stylesTable;
