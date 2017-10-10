import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { addNumberAction, decrementNumberAction, squareNumberAction } from './actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.addNumber}>Increment</button>
        <button onClick={this.props.decrementNumber}>Decrement</button>
        <button onClick={this.props.squareNumber}>Square</button>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.app.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (number) => dispatch(addNumberAction(number)),
    decrementNumber: (number) => dispatch(decrementNumberAction(number)),
    squareNumber: (number) => dispatch(squareNumberAction(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
