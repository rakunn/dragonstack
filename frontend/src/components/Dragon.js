/* global fetch */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import DragonAvatar from './DragonAvatar';

const DEFAULT_DRAGON = {
    generationId: undefined,
    dragonId: undefined,
    nickName: undefined,
    birthdate: undefined,
    traits: [],
};

class Dragon extends Component {
    state = { dragon: DEFAULT_DRAGON }

    fetchDragon = () => {
        fetch('https://web-dev-node-rakunn.c9users.io/dragon/new')
            .then(response => response.json())
            .then(json => this.setState({ dragon: json }))
            .catch(error => console.error(error));
    }

    componentDidMount() {
        this.fetchDragon();
    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchDragon}>New Dragon</Button>
                <DragonAvatar dragon = {this.state.dragon} />
            </div>
        );
    }
}

export default Dragon;