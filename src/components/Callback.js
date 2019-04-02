import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

class Callback extends Component {
    componentDidMount() {
        const values = queryString.parse(this.props.location.hash);
        const token = values.access_token;
        const Authorization = `Bearer ${token}`;
        
        axios.get('https://esi.evetech.net/verify/', 
            {headers: {Authorization}}
        ).then(response => {
            const CharID = response.data.CharacterID;
            axios.get(`https://esi.evetech.net/v1/characters/${CharID}/standings/`,
                {headers: {Authorization}}            
            )
            .then(response => {
                console.log(response);
            });
        }
        );
    };

    render() {
        return(
            <div>
                <p>hello</p>
            </div>
        );
    };
    
};

export default Callback;