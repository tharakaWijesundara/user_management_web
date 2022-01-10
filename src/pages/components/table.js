import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Table } from 'react-bootstrap'
import TableRow from './tableRow.js'
import './table.css'

class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workerDetails: []
        }
        const workerDetails = Object.assign([], this.props.workerDetails)
        this.state.workerDetails = workerDetails

    }
    updateStyles = (style) => {
        let stringStyles = style.split(',');
        return stringStyles
    }
    deleteWorker = () => {

    }
    render() {
        return (
            <div className="tab1Table">
                <Table borderless striped>
                    <thead>
                        <tr>
                            <th>ID number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Styles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.workerDetails.map((user, index) => {
                                return (
                                    <TableRow
                                        key={index}
                                        idNum={user.idNum}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        styles={this.updateStyles(user.styles)}
                                        loggerDetails={this.props.loggerDetails}
                                    >
                                    </TableRow>


                                )
                            })
                        }

                    </tbody>
                </Table>

            </div >

        )
    }

}

export default table;