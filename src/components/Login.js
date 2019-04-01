import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import '../css/Login.css';


class Login extends Component {

    loginHandler = () => {

        




        //axios.post('https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=https://mb99m19me2.execute-api.eu-west-1.amazonaws.com/prod/oauth&client_id=e5e77f49c50041a68164dce7d9eb07ac&scope=esi-characters.read_standings.v1&state=uniquestate123')
        //.then(response => {
        //    this.Auth.setToken(response.data.token);
        //}).catch(error => {
        //    this.setState({ alertMessage: "error" });
        //})
}

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
                                <Form.Group>
                                    <a class="btn btn-primary" href="https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=https://dgwxfhbva6lnp.cloudfront.net/auth&client_id=e5e77f49c50041a68164dce7d9eb07ac&scope=esi-characters.read_standings.v1&state=uniquestate123" role="button">MUKODJEGECI</a>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-muted">It won't take long, I promise</Card.Footer>
                        </Card>
                    </Form.Group>
                </div>
        );
    };
};

export default Login;