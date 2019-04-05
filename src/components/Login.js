import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import queryString from 'query-string';

import '../css/Login.css';

const loginUri = "https://login.eveonline.com/oauth/authorize/?response_type=token&";
const redirectUri = "redirect_uri=https://dgwxfhbva6lnp.cloudfront.net/callback/&";
const clientId = "client_id=e5e77f49c50041a68164dce7d9eb07ac&";
const scope = "scope=esi-characters.read_standings.v1&";
const UState = "state=uniquestate123";

const LoginPath = loginUri + redirectUri + clientId + scope + UState;

const queryParameters = { "client_id": "asdasge3f24gr", "redirect_uri": "https://lofasz.hu/callback", "scope": "scope1111 scope2222" };

queryString.stringify(queryParameters);

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
                                <Form.Group> 
                                    <a class="btn btn-primary" href="https://login.eveonline.com/oauth/authorize/?response_type=token&redirect_uri=https://dgwxfhbva6lnp.cloudfront.net/callback/&client_id=e5e77f49c50041a68164dce7d9eb07ac&scope=esi-characters.read_standings.v1%20esi-fittings.read_fittings.v1%20esi-characters.read_fatigue.v1%20esi-wallet.read_character_wallet.v1%20esi-skills.read_skills.v1&state=uniquestate123" role="button">Login</a>
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