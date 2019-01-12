/* global fetch */
import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };
const MIN_DELAY = 3000;

class Generation extends Component {

    state = { generation: DEFAULT_GENERATION };
    timer = undefined;

    componentDidMount() {
        this.fetchNextGeneration();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchGeneration = () => {
        fetch('https://web-dev-node-rakunn.c9users.io/generation')
            .then(response => response.json())
            .then(data => this.setState({ generation: data }))
            .catch(error => console.log(error));
    }

    fetchNextGeneration = () => {
        this.fetchGeneration();

        let delay = new Date(this.state.generation.expiration).getTime() - new Date().getTime();

        if (delay < MIN_DELAY) {
            delay = MIN_DELAY;
        }

        this.timer = setTimeout(() => {
            this.fetchNextGeneration();
        }, delay);
    }

    render() {
        const { generation } = this.state;

        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        );
    }
}

export default Generation;