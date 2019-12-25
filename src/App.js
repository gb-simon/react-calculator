import React from 'react';
import './App.css';
import Calculator from './Calculator';
import ResultScreen from './ResultScreen';
import ComputationScreen from './ComputationScreen';
import Screen from './Screen';
import KeypadRow from './KeypadRow';
import Keypad from './Keypad';
import Button from './Button';
import LargeButton from './LargeButton';



class App extends React.Component {
  render(){ 
    return(
      <div className="App">
        <Calculator/>  
      </div>
    );
  }
}


export default App;
