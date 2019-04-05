import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class Callback extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.hash);
        const token = values.access_token;
        const Authorization = `Bearer ${token}`;
        axios.defaults.headers.common['Authorization'] = Authorization;

        axios.get('https://esi.evetech.net/verify/')
        .then(response => {
            const CharID = response.data.CharacterID;
            console.log(CharID);
            this.props.setCharacterId(CharID);
        }
        );
    };

    render() {
        return(
            <div>
                <Form.Group className="CallbackCard">
                        <Card className="text-center">
                            <Card.Header>Success!</Card.Header>
                            <Card.Body>
                                <Card.Title>You are successfully logged into the application.</Card.Title>
                                <Card.Text>Please proceed with clicking on this link to start.</Card.Text>
                                <Form.Group>
                                    <Link to="/character">Let's get started.</Link>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer className="text-muted"></Card.Footer>
                        </Card>
                    </Form.Group>
                <li>
                    
                </li>
            </div>
        );
    };
};

export default Callback;