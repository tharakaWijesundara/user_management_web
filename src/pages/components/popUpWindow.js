import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, Button, Form, Col, DropdownButton, Row } from "react-bootstrap";
import DropdownRow from "./dropDownRow.js";
import axios from "axios";

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

class popUpWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      idNum: null,
      styles: [],
      address1: "",
      address2: "",
      styleData: null,
      checked: [],
      formErrors: {
        firstName: "",
        lastName: "",
        idNum: "",
      },
    };
  }
  changeWorker = (type, item) => {
    let itemValue = item.target.value;
    let formErrors = { ...this.state.formErrors };

    switch (type) {
      case "firstName": {
        this.setState({ firstName: itemValue });

        formErrors.firstName =
          itemValue.length < 3 ? "minimum 3 characaters required" : "";

        break;
      }
      case "lastName": {
        this.setState({ lastName: itemValue });

        formErrors.lastName =
          itemValue.length < 3 ? "minimum 3 characaters required" : "";

        break;
      }
      case "idNum": {
        this.setState({ idNum: itemValue });

        formErrors.idNum =
          itemValue.length < 6 ? "ID number should have 6 characaters" : "";

        break;
      }
      case "address1": {
        this.setState({ address1: itemValue });
        break;
      }
      case "address2": {
        this.setState({ address2: itemValue });
        break;
      }
      default:
        break;
    }
    this.setState({ formErrors });
  };

  createStyleData = () => {
    // console.log(this.props.styles[this.state.styles[]]);

    var dict = new Object();
    for (var i = 0; i < this.state.styles.length; i++) {
      var styleName = this.state.styles[i];
      var styleIdNum = this.props.styleDetails.find(function (item) {
        return item.name == styleName;
      })["id"];
      dict[styleIdNum] = 0;
    }

    this.setState({ styleData: JSON.stringify(dict) });
  };

  handleSubmit = () => {
    this.createStyleData();
    var {
      firstName,
      lastName,
      idNum,
      styles,
      address1,
      address2,
      styleData,
    } = this.state;
    let worker = Object.assign(
      { styles: styles.toString() },
      { firstName, lastName, idNum, address1, address2, styleData }
    );
    if (formValid(this.state)) {
      axios
        .post("http://localhost:3000/api/users/", worker)
        .then((res) => {
          console.log(res);
          this.setState({
            firstName: "",
            lastName: "",
            idNum: null,
            styles: [],
            address1: "",
            address2: "",
            checked: [],
            styleData: null,
          });
            window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });

      let obj = Object.assign({}, worker);
      console.warn("submit data", obj);
      this.props.onHide();
    }
  };
  addOrRemvItem = (item) => {
    let checkedList = this.state.checked;
    let styles = this.state.styles;
    if (this.state.checked.indexOf(item) > -1) {
      checkedList.splice(this.state.checked.indexOf(item), 1);
      styles.splice(
        this.state.styles.indexOf(this.props.stylesNames[item].name),
        1
      );
      this.setState({ checked: checkedList });
      this.setState({ styles: styles });
    } else {
      checkedList.push(item);
      styles.push(this.props.stylesNames[item].name);
      this.setState({ checked: checkedList });
      this.setState({ styles: styles });
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Worker
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter the details of worker</h4>
          {/* worker form */}
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="first_name">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder="Enter first name"
                  onChange={(item) => this.changeWorker("firstName", item)}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="last_name">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  placeholder="Enter last name"
                  onChange={(item) => this.changeWorker("lastName", item)}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="id_num">
              <Form.Label>ID number</Form.Label>
              <Form.Control
                placeholder="123456"
                onChange={(item) => this.changeWorker("idNum", item)}
              />
              {formErrors.idNum.length > 0 && (
                <span className="errorMessage">{formErrors.idNum}</span>
              )}
            </Form.Group>
            <Form.Group controlId="address_one">
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                placeholder="258/3 Galvihara Rd"
                onChange={(item) => this.changeWorker("address1", item)}
              />
            </Form.Group>

            <Form.Group controlId="address_two">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Dehiwala-Mount Lavinia 10350"
                onChange={(item) => this.changeWorker("address2", item)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="styles">
                  <Form.Label>Styles</Form.Label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Select Styles"
                  >
                    {this.props.stylesNames.map((style, index) => {
                      return (
                        <DropdownRow
                          key={index}
                          onClick={() => this.addOrRemvItem(index)}
                          name={style.name}
                          select={this.state.checked.indexOf(index) > -1}
                        />
                      );
                    })}
                  </DropdownButton>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          {/* worker form */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit} variant="success">
            Save
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default popUpWindow;
