import React from 'react';
import { Dropdown, Row ,Badge} from 'react-bootstrap'
import { HiBadgeCheck } from 'react-icons/hi'
import './dropDown.css'


function dropDownRow(props) {

    if (props.select) {
        return (
            <Dropdown.Item onClick={props.onClick}>
                <Row className="styleRow">
                    <div className="styleText">{props.name}</div>
                    <Badge ><HiBadgeCheck className = "styleCheckIcon"/></Badge>
                </Row>
            </Dropdown.Item>
        )
    } else {
        return (
            <Dropdown.Item onClick={props.onClick}>
                <Row className="styleRow">
                    <div className="styleText">{props.name}</div>
                </Row>
            </Dropdown.Item>
        )
    }
}
export default dropDownRow;