import React, { Component } from 'react';
import './table.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'



class tableRow extends Component {

changeState = () => {
    if (this.props.status === 2) {
        let statusUpdate = Object.assign({}, { status: 3, idNum: this.props.idNum })
        axios.post("http://localhost:3000/api/users/status", statusUpdate)
            .then(res => {
                console.warn("done", res);
                this.props.refresh();
                window.location.reload(false);
            }
            

            )
            .catch(error => {
                console.log(error)
            })
    } else {
        let statusUpdate = Object.assign({}, { status: 2, idNum: this.props.idNum })
        axios.post("http://localhost:3000/api/users/status", statusUpdate)
            .then(res => {
                console.warn("done", res);
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error)
            })
    }
    
}
    
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
                <td>{this.props.idNum}</td>
                <div className="changeStatusBaricon">
                    {(() => {
                        if (this.props.status === 2) {
                            return (
                                <Button variant="light" className="changePosition" 
                                onClick={
                                    this.changeState
                                } ><FaArrowAltCircleDown className="downArrow"></FaArrowAltCircleDown></Button>
                            )

                        } else if (this.props.status === 3) {
                            return (
                                <Button variant="light" className="changePosition" onClick={this.changeState}><FaArrowAltCircleUp className="upArrow"></FaArrowAltCircleUp></Button>
                            )

                        }
                        {/* <Button variant="light" className="changePosition"> Add as <br/> an admin</Button> */ }
                    })()}


                </div>

            </tr>
        )
    }

}

export default tableRow;