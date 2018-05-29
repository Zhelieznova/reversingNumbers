import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function reverseNumberNew(num) {
  return num
    .split('')
    .reduce((reversedNumber, digit) =>
      reversedNumber += Math.abs((digit%10)-10).toString(),
      ''
     )
}

function reverseNumber(num) {
  let result = ''
  
  for (let i = 0; i < num.length; i++) {
     result += Math.abs((num[i]%10)-10).toString();
  }

  return result;
}

class ItemName extends React.Component {

  handleChange = (e) => {
    if(isNaN(e.target.value)) alert("Only numbers");
    else this.props.onValueChange(e.target.value);
  }

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
    }
     
     handleReversed = (value) => {
      this.setState({
        reverseNumber(value)
      });
    }

    handleOnClick = (e) => {
      e.preventDefault();
      this.setState({
        value: reverseNumber(this.state.value),
      });
    }

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
