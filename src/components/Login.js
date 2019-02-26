import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import '../css/Login.css';


class Login extends Component {
    render() {
        return(
                <div>
                    <header className="LoginHeader">Welcome to EVE Virtual Interface</header>
                    <p1>One application to rule them all</p1>
                    <Form.Group className="LoginCard">
                        <Card className="text-center">
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Card.Title>We use EVE online's SSO OAuth</Card.Title>
                                <Card.Text>So you have to click this button to get started</Card.Text>
                                <Button variant="primary">Click here to Login</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">It won't take long, I promise</Card.Footer>
                        </Card>
                    </Form.Group>
                </div>
        );
    };
}

export default Login;