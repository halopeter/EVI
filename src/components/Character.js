import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './Navbar';
import '../css/Character.css'

class Character extends Component {
    state = {
        name: "",
        dateOfBirth: "",
        jumpFatique: "",
        securityStatus: null,
        skillPoints: null,
        isk: null
    };


    componentDidMount() {
        console.log(this.props.characterId);
        axios.get(`https://esi.evetech.net/v4/characters/${this.props.characterId}/`)
        .then(response => {
            this.setState({name: response.data.name});
            this.setState({dateOfBirth: response.data.birthday});
            this.setState({securityStatus: response.data.security_status});
        });

        axios.get(`https://esi.evetech.net/v1/characters/${this.props.characterId}/fatigue/`)
        .then(response => {
            console.log(response);
            this.setState({jumpFatique: response.data.jump_fatigue_expire_date});
        });

        axios.get(`https://esi.evetech.net/v4/characters/${this.props.characterId}/skills/`)
        .then(response => {
            console.log(response);
            this.setState({skillPoints: response.data.total_sp});
        });

        axios.get(`https://esi.evetech.net/v1/characters/${this.props.characterId}/wallet/`)
        .then(response => {
            console.log(response);
            this.setState({isk: response.data});
        });
    };
    render() {
        return(
                <div>
                    <NavBar />
                    <div class="container" className="FirstCharacterContainer">
                        <div class="row">
                            <div class="col-sm">
                            Name:
                            </div>
                            <div class="col-sm">
                            Date of Birth:
                            </div>
                            <div class="col-sm">
                            Jump Fatique will expire:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                            {this.state.name}
                            </div>
                            <div class="col-sm">
                            {this.state.dateOfBirth}
                            </div>
                            <div class="col-sm">
                            {this.state.jumpFatique}
                            </div>
                        </div>
                    </div>

                    <div class="container" className="SecondCharacterContainer">
                        <div class="row">
                            <div class="col-sm">
                            Security Status:
                            </div>
                            <div class="col-sm">
                            Skill Points:
                            </div>
                            <div class="col-sm">
                            ISK:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                            {this.state.securityStatus}
                            </div>
                            <div class="col-sm">
                            {this.state.skillPoints}
                            </div>
                            <div class="col-sm">
                            {this.state.isk}
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
}

export default Character;