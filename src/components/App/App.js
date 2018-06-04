import React, { Component } from 'react';
import ItemName from '../ItemName/ItemName';
import reverseNumber from '../../utils/reverseNumber';
import '../../css/App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      note: false,
    };
  }

  handleError = (value) => {
    this.setState({
      value: this.state.value,
      note: value,
    });
  };

  handleNormal = (value) => {
    this.setState({
      value,
      note: false,
    });
  };

  handleReversed = (value) => {
    this.setState({
      value: reverseNumber(value),
      note: false,
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
          onError={this.handleError}
        />
        <ItemName
          name="Reversed number: "
          value={reverseNumber(this.state.value)}
          onValueChange={this.handleReversed}
          onError={this.handleError}
        />
        <br />
        <input
          type="submit"
          value="Change Values"
          onClick={this.handleOnClick}
        />
        {
          this.state.note && <div>Only numbers!</div>
        }
      </form>);
  }
}

export default App;
