import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tab, Nav, Col, Row, ButtonToolbar } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Table from "./components/table.js";
import SupervisorTable from "./components/supervisorTable.js";
import StyleTable from "./components/stylesTable.js";
import Buttons from "./components/buttons.js";

import PopUpWindow from "./components/popUpWindow.js";
import AddStyle from "./components/addStyleForm.js";
import "./startPage.css";

class startPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggerDetails: null,
      addModalShow: false,
    };
    this.state.loggerDetails = this.props.loggerDetails;
  }
  disableTab = () => {
    if (this.state.loggerDetails.status === 1) {
      return false;
    } else {
      return true;
    }
  };
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="startPage">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Manage Workers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" disabled={this.disableTab()}>
                    Manage Supervisors
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled={this.disableTab()}>
                    Set Styles
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Col>
                    <p className="topText">Manage Workers</p>
                    <div className="buttonsRow">
                      <ButtonToolbar>
                        <Buttons
                          loggerDetails={this.state.loggerDetails}
                          onClick={() => this.setState({ addModalShow: true })}
                        />
                        <PopUpWindow
                          show={this.state.addModalShow}
                          onHide={addModalClose}
                          stylesNames={this.props.stylesNames}
                          styleDetails={this.props.styles}
                        />
                      </ButtonToolbar>
                    </div>

                    <Table
                      loggerDetails={this.state.loggerDetails}
                      workerDetails={this.props.workerDetails}
                    />
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Col>
                    <p className="topText">Manage Supervisors</p>
                    <Alert variant="primary">
                      <p className="topText2">List of Head Supervisors</p>
                    </Alert>

                    <SupervisorTable
                      supervisorDetails={this.props.headSupervisors}
                      refresh={this.props.refresh}
                    />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Alert variant="primary">
                      <p className="topText2">List of Normal Supervisors</p>
                    </Alert>
                    <SupervisorTable
                      supervisorDetails={this.props.normalSupervisors}
                      refresh={this.props.refresh}
                    />
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Col>
                    <p className="topText">Manage Styles</p>
                    <Alert variant="primary">
                      <p className="topText2">Added Styles</p>
                    </Alert>
                    <StyleTable styles={this.props.styles} />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Alert variant="primary">
                      <p className="topText2">Add a new style</p>
                    </Alert>
                    <AddStyle />
                  </Col>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default startPage;
