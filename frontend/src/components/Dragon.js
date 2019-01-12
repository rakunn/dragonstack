/* global fetch */
import React, { Component } from 'react';

const DEFAULT_DRAGON = {
    generationId: undefined,
    dragonId: undefined,
    nickName: undefined,
    birthDate: undefined,
    traits: [],
};

class Dragon extends Component {
    state = { dragon: DEFAULT_DRAGON }

    componentDidMount() {
        fetch('https://web-dev-node-rakunn.c9users.io/dragon/new')
            .then(response => response.json())
            .then(json => this.setState({ dragon: json }))
            .catch(error => console.error(error));
    }

    render() {
        const { dragon } = this.state;

        return (
            <div>
                <ul>
                    <li>{ dragon.generationId }</li>
                    <li>{ dragon.dragonId }</li>
                    <li>
                        <ul>
                        { dragon.traits.map(({ traitType, traitValue}) => (
                            <li> { traitType }: { traitValue }</li>
                        )) }
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dragon;