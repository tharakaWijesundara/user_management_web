import React from "react";
import { Modal, Button, Alert, Row } from "react-bootstrap";

function IncrementStyleModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Styles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            height: "300px",
            padding: "10px",
            overflow: "auto",
          }}
        >
          {Object.keys(props.incrementedStyles).map((value, index) => {
            return (
              <Alert variant={"primary"}>
                {
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p1>Style-ID - {value}</p1>
                    <p1>Count - {props.incrementedStyles[value]}</p1>
                  </Row>
                }
              </Alert>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IncrementStyleModal;
