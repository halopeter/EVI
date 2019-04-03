import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../css/Login.css';

class Login extends Component {

    render() {
        return(
            <Router>
                <div>
                    <header className="LoginHeader">Welcome to EVE Virtual Interface</header>
                    <p1>One application to rule them all</p1>
                    <Form.Group className="LoginCard">
                        <Card className="text-center">
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Card.Title>We use EVE online's SSO OAuth</Card.Title>
                                <Card.Text>So you have to click this button to get started</Card.Text>
                                <Form.Group>
                                    <a class="btn btn-primary" href="https://login.eveonline.com/oauth/authorize/?response_type=token&redirect_uri=https://dgwxfhbva6lnp.cloudfront.net/callback/&client_id=e5e77f49c50041a68164dce7d9eb07ac&scope=esi-characters.read_standings.v1&state=uniquestate123" role="button">Login</a>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-muted">It won't take long, I promise</Card.Footer>
                        </Card>
                    </Form.Group>
                </div>
            </Router>
        );
    };
};

export default Login;