import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

import NavBar from './Navbar';
import eve from './eve.jpg';

class Character extends Component {
    componentDidMount() {
        console.log(this.props.characterId);
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