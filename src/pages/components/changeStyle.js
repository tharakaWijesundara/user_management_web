import React, { Component, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import axios from "axios";

function ChangeStyle(props) {
  const [name, setName] = useState(props.name);
  const [id, setId] = useState(props.id);
  const [stich, setStich] = useState(props.stich);
  const [error, setError] = useState(props.error);
  const [prop4, setProp4] = useState(props.prop4);
  const [prop5, setProp5] = useState(props.prop5);

  const handleSubmit = () => {
    axios
      .put(
        `http://localhost:3000/api/users/?styleId=${id}&stitchCount=${stich}`
      )
      .then((res) => {
        console.warn("done", res);
        this.props.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change style properties
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Name of the style</Form.Label>
                <Form.Control
                  placeholder="Name of the style"
                  onChange={(item) => setName(item.target.value)}
                  defaultValue={name}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  placeholder="Set the ID"
                  onChange={(item) => setId(item.target.value)}
                  defaultValue={id}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="stich_count">
                <Form.Label>Stich count</Form.Label>
                <Form.Control
                  placeholder="Set the stich count"
                  onChange={(item) => setStich(item.target.value)}
                  defaultValue={stich}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="error_margin">
                <Form.Label>Error margin</Form.Label>
                <Form.Control
                  placeholder="Set the error margin"
                  onChange={(item) => setError(item.target.value)}
                  defaultValue={error}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="prop4">
                <Form.Label>prop4</Form.Label>
                <Form.Control
                  placeholder="prop4"
                  onChange={(item) => setProp4(item.target.value)}
                  defaultValue={prop4}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="prop5">
                <Form.Label>prop5</Form.Label>
                <Form.Control
                  placeholder="prop5"
                  onChange={(item) => setProp5(item.target.value)}
                  defaultValue={prop5}
                />
              </Form.Group>
            </Form.Row>
            <Row className="styleSubmitBtnRow">
              <Button onClick={handleSubmit} variant="success">
                Save the style
              </Button>
            </Row>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <Button onClick={updateStyles}>Save</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeStyle;
