import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row } from 'react-bootstrap'
import './buttons.css'



class button extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loggerDetails:null
        }
        this.state.loggerDetails = this.props.loggerDetails;
    }
    refresh = () => {
        window.location.reload(false);
    }
    disabledButton = () => {
        if (this.state.loggerDetails.status === 3) {
            return (true)
        } else {
            return (false)
        }
    }
    render() {
        return (
            <div>
                <Row className='buttonRow'>
                    <Button disabled={this.disabledButton()} variant="success" onClick={this.props.onClick} >Add Worker</Button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Button variant="primary" onClick={this.refresh}>Refresh</Button>
                </Row>
            </div>
        )
    }

}

export default button;