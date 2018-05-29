import React, { Component } from 'react';
import { ItemName } from './ItemName.js';
import { reverseNumber } from './reverseNumber.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value : ''
        }
    }

    handleNormal = (value) => {
        this.setState({
           value
        });
    };

    handleReversed = (value) => {
        this.setState({
            value: reverseNumber(value)
        });
    };

    handleOnClick = (e) => {
        e.preventDefault();
        this.setState({
            value: reverseNumber(this.state.value),
        });
    };


    render() {
        return (
            <form>
                Enter any number(s) from 1 to 9
                <ItemName
                    name="Normal number: "
                    value={this.state.value}
                    onValueChange={this.handleNormal}
                />
                <ItemName
                    name="Reversed number: "
                    value={reverseNumber(this.state.value)}
                    onValueChange={this.handleReversed}
                />
                <br />
                <input
                    type="submit"
                    value="Change Values"
                    onClick={this.handleOnClick}
                />
            </form>
        );
    }
}

export default App;
