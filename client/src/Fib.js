import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seenIndexes: [],
            values: {},
            index: ''
        };
    }

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({
            values: values.data
        });
    }

    async fetchIndexes() {
        const indexes = await axios.get('/api/values/all');
        this.setState({
            seenIndexes: indexes.data
        });
    }

    renderSeenIndexes = () => {
        return this.state.seenIndexes.map(({number}) => number).join(', ');
    };

    renderValues = () => {
        let entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For index {key}, I calculated {this.state.values[key]}
                </div>
            );
        }
        return entries;
    };

    onIndexChange = (event) => {
        this.setState({
            index: event.target.value
        });
    };

    onIndexSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/values', {
            index: this.state.index
        });
        this.setState({
            index: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onIndexSubmit}>
                    <label>Enter your index:</label>
                    <input value={this.state.index} onChange={this.onIndexChange}/>
                    <button>Submit</button>
                </form>
                <h3>Indexes I've seen:</h3>
                {this.renderSeenIndexes()}

                <h3>Calculated Values:</h3>
                {this.renderValues()}
            </div>
        );
    }
}

export default Fib;