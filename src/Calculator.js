import React from 'react';
import Screen from './Screen';
import Keypad from './Keypad';


class Calculator extends React.Component {
  state = {
    equation: '',
    result: 0
  } 
  
  
  render() {
    return (
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result} />
        <Keypad />
      </main>
    );
  }
}

export default Calculator;