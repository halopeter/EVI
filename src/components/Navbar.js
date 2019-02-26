import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">EVE Virtual Interface</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="character">Character</Nav.Link>
                    <Nav.Link href="fittings">Fittings</Nav.Link>
                    <Nav.Link href="corporation">Corporation</Nav.Link>
                    <Nav.Link href="assets">Assets</Nav.Link>
                    <Nav.Link href="industry">Industry</Nav.Link>
                    <Nav.Link href="status">Status</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="logout">Logout</Nav.Link>                    
                </Nav>
            </Navbar>
        );
    };
}

export default NavBar;