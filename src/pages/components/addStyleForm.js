import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';



class stylesWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "", id: "", stich_count: "", error_margin: "", prop3: "", prop4: "", prop5: ""
        }
    }
    changeWorker = (type, item) => {
        let itemValue = item.target.value;

        switch (type) {
            case "name": {
                this.setState({ name: itemValue });

                break
            }
            case "id": {
                this.setState({ id: itemValue });
                break
            }
            case "stich_count": {
                this.setState({ stich_count: itemValue });

                break
            }
            case "error_margin": {
                this.setState({ error_margin: itemValue });

                break
            }
            case "prop4": {
                this.setState({ prop4: itemValue })
                break
            }
            case "prop5": {
                this.setState({ prop5: itemValue })
                break
            }
            default: break
        }
    }
    handleSubmit = () => {
        var { name, id, stich_count, error_margin, prop4, prop5 } = this.state;
        let style = Object.assign({}, { name, id, stich_count, error_margin, prop4, prop5 });
        axios.post("http://localhost:3000/api/users/createStyle", style)
            .then(res => {
                console.log(res)
                this.setState({
                    name: "", id: "", stich_count: "", error_margin: "", prop4: "", prop5: ""
                })
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error)
            })

        let obj = Object.assign({}, style)
        console.warn("submit style", obj)

    }

    render() {
        return (
            <div className="styleForm">
                <h4>Enter the details of a Style</h4>
                {/* worker form */}
                <Form >
                    <Form.Row>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name of the style</Form.Label>
                            <Form.Control
                                placeholder="Name of the style"
                                onChange={(item) => this.changeWorker("name", item)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="id">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                placeholder="Set the ID"
                                onChange={(item) => this.changeWorker("id", item)}

                            />
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="stich_count">
                            <Form.Label>Stich count</Form.Label>
                            <Form.Control
                                placeholder="Set the stich count"
                                onChange={(item) => this.changeWorker("stich_count", item)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="error_margin">
                            <Form.Label>Error margin</Form.Label>
                            <Form.Control
                                placeholder="Set the error margin"
                                onChange={(item) => this.changeWorker("error_margin", item)}

                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="prop4">
                            <Form.Label>prop4</Form.Label>
                            <Form.Control
                                placeholder="prop4"
                                onChange={(item) => this.changeWorker("prop4", item)}

                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="prop5">
                            <Form.Label>prop5</Form.Label>
                            <Form.Control
                                placeholder="prop5"
                                onChange={(item) => this.changeWorker("prop5", item)}

                            />
                        </Form.Group>
                    </Form.Row>
                    <Row className="styleSubmitBtnRow">
                        <Button
                            onClick={this.handleSubmit}
                            variant='success'
                        >Save the style</Button>
                    </Row>
                </Form>


            </div>
        )

    }
}

export default stylesWindow;