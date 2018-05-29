import React, { Component } from 'react';

export class ItemName extends Component {

    handleChange = (e) => {
        if(isNaN(e.target.value)) alert("Only numbers");
        else this.props.onValueChange(e.target.value);
    };

    render() {
        return (
            <label>
                <br/>
                {this.props.name}
                <input type="text"
                       value={this.props.value}
                       onChange={this.handleChange}/>
            </label>
        );
    }
}
