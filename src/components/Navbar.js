import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class NavBar extends Component {
    render() {
        return(
            <Navbar>
            <Nav className="mr-auto">
                <Button>Yeah</Button>
            </Nav>
            </Navbar>
        );
    };
}

export default NavBar;