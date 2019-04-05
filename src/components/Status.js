import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './Navbar';
import '../css/Status.css';

class Status extends Component {
    state = {
        playersOnline: null,
        serverVersion: "",
        startTime: ""
    }

    componentDidMount() {
        axios.get(`https://esi.evetech.net/v1/status/`)
        .then(response => {
            this.setState({playersOnline: response.data.players});
            this.setState({serverVersion: response.data.server_version});
            this.setState({startTime: response.data.start_time});
        });
    }

    render() {
        return(
            <div>
                <NavBar />
                <div class="container" className="StatusContainer">
                        <div class="row">
                            <div class="col-sm">
                            Players Online:
                            </div>
                            <div class="col-sm">
                            Server Version:
                            </div>
                            <div class="col-sm">
                            Last date server restarted:
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                            {this.state.playersOnline}
                            </div>
                            <div class="col-sm">
                            {this.state.serverVersion}
                            </div>
                            <div class="col-sm">
                            {this.state.startTime}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Status;