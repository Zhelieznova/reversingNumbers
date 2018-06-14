import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemName extends Component {
  handleChange = (e) => {
    const numberValue = Number(e.target.value);
    if (Number.isNaN(numberValue)) {
      this.props.onError(true);
    } else {
      this.props.onValueChange(e.target.value);
    }
  };
  render() {
    return (
      <label>
        <br />
        {this.props.name}
        <div>Some text</div>
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
  name: PropTypes.string,
  value: PropTypes.string,
  onError: PropTypes.func,
  onValueChange: PropTypes.func,
};

