import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemName extends Component {
  handleChange = (e) => {
    if (isNaN(e.target.value)) {
      alert('sda');
    } else this.props.onValueChange(e.target.value);
  };
  render() {
    return (
      <label>
        <br />
        {this.props.name}
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
ItemName.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

