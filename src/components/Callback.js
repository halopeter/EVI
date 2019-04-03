import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
            axios.get(`https://esi.evetech.net/v1/characters/${CharID}/standings/`)
            .then(response => {
                console.log(response);
            });
        }
        );
    };

    render() {
        return(
            <div>
                <li>
                    <Link to="/character">Character</Link>
                </li>
            </div>
        );
    };
};

export default Callback;