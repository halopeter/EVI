import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

import NavBar from './Navbar';
import eve from './eve.jpg';

class Character extends Component {
    componentDidMount() {
        console.log(this.props.characterId);
        axios.get(`https://esi.evetech.net/v2/characters/${this.props.characterId}/fittings/`)
        .then(response => {
            console.log(response);
        });
    };
    render() {
        return(
                <div>
                    <NavBar />
                    <Image src={eve}/>
                </div>
        );
    };
}

export default Character;