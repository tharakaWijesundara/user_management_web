import React, { Component } from 'react';

import { Button, Form, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap'

import StyleCard from './styleCard.js'

class workerForm extends Component {
    // onChange={this.changeField.bind(this, "firstName")} 
    
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="first_name">
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="last_name">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Enter last name"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="address_one">
                    <Form.Label>Address 1</Form.Label>
                    <Form.Control placeholder="258/3 Galvihara Rd" />
                </Form.Group>

                <Form.Group controlId="address_two">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Dehiwala-Mount Lavinia 10350" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="styles">
                            <Form.Label>Styles</Form.Label>
                            <DropdownButton id="dropdown-basic-button" title="Select Styles">
                                <Dropdown.Item href="#/action-1">One</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>
                    </Col>

                    <Col>
                    <StyleCard/>
                    </Col>

                </Row>

            </Form>
        )
    }

}

export default workerForm;