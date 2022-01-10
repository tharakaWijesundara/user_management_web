import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Table } from 'react-bootstrap'
import TableRowSupervisor from './tableRowSupervisor.js'
import './table.css'

class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supervisorDetails: []
        }
        const supervisorDetails = Object.assign([], this.props.supervisorDetails)
        this.state.supervisorDetails = supervisorDetails

    }

    render() {
        return (
            <div className="tab1Table">
                <Table borderless striped>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>ID Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.supervisorDetails.map((user, index) => {
                                return (
                                    <TableRowSupervisor
                                        key={index}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        email={user.email}
                                        idNum={user.idNum}
                                        status={user.status}
                                        refresh={this.props.refresh}
                                    >
                                    </TableRowSupervisor>

                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>

        )
    }

}

export default table;