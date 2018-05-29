import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function reverseNumber(num) {
  let result;
  for (let i = 0; i < num.length; i++) {
     if(!result) {
       result = Math.abs((num[i]%10)-10);
     } else {
        result += Math.abs((num[i]%10)-10) + '';
     }
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
        value : '',
        revValue: ''
      }
    }

     handleToNormal = (value) => {
      this.setState({
        value: reverseNumber(value),
        revValue: value
      });
    }

    handleToReverse = (value) => {
      console.log('sdv '+value)
      this.setState({
        value: value,
        revValue: reverseNumber(value)
      });
    }

    handleOnClick = (e) => {
      e.preventDefault();
      this.setState({
        value: this.state.revValue,
        revValue: this.state.value
      });
    }

    render() {
      return (
       <form>
          Enter any number(s) from 1 to 9
          <ItemName
            name="Normal number: "
            value={this.state.value}
            onValueChange={this.handleToReverse}
          />
          <ItemName
            name="Reversed number: "
            value={this.state.revValue}
            onValueChange={this.handleToNormal}
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
