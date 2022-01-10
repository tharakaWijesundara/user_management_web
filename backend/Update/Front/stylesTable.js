import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Table} from 'react-bootstrap'
import TableRowStyle from './tableRowStyle.js'
import './table.css'

class stylesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleDetails: []
        }
        const styleDetails = Object.assign([], this.props.styles)
        this.state.styleDetails = styleDetails
    }

    render() {
        return (
            <div className="tab1Table">
                <Table borderless striped>
                    <thead>
                        <tr>
                            <th>Style name</th>
                            <th>Stich count</th>
                            <th>Error margin</th>
                            <th>Prop 3</th>
                            <th>Prop 4</th>
                            <th>Prop 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.styleDetails.map((style, index) => {
                                return (
                                        <TableRowStyle
                                            key = {index}
                                            name={style.name}
                                            prop1={style.stich_count}
                                            prop2={style.error_margin}
                                            prop3={style.prop3}
                                            prop4={style.prop4}
                                            prop5={style.prop5}
                                            refresh={this.props.refresh}
                                      >
                                        </TableRowStyle>

                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>

        )
    }

}

export default stylesTable;