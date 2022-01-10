import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function dropDown(props) {
    return (
        <DropdownButton id="dropdown-item-button" title="Assigned Styles" variant="light">
            {/* <Dropdown.ItemText >Style 1</Dropdown.ItemText>
            <Dropdown.ItemText >Style 2</Dropdown.ItemText>
            <Dropdown.ItemText >Style 3</Dropdown.ItemText>
            <Dropdown.ItemText >Style 4</Dropdown.ItemText> */}
            {
                props.styles.map((style) => {
                    return (
                    <Dropdown.ItemText >{style}</Dropdown.ItemText>
                    )
                })
            }
        </DropdownButton>

    )
}


export default dropDown;

