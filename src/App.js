import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      operator: null,
      prevValue: null,
    };
  }

  handleButtonClick = (value) => {
    if (this.state.displayValue === '0') {
      this.setState({ displayValue: value });
    } else {
      this.setState((prevState) => ({
        displayValue: prevState.displayValue + value,
      }));
    }
  };

  handleOperator = (operator) => {
    this.setState({
      operator,
      prevValue: this.state.displayValue,
      displayValue: '0',
    });
  };

  handleClear = () => {
    this.setState({
      displayValue: '0',
      operator: null,
      prevValue: null,
    });
  };

  handleCalculate = () => {
    if (this.state.prevValue && this.state.operator) {
      const prev = parseFloat(this.state.prevValue);
      const current = parseFloat(this.state.displayValue);
      let result = 0;

      switch (this.state.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          break;
      }

      this.setState({
        displayValue: result.toString(),
        operator: null,
        prevValue: null,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">{this.state.displayValue}</div>
          <div className="buttons">
            <button onClick={() => this.handleClear()}>C</button>
            <button onClick={() => this.handleOperator('/')}>/</button>
            <button onClick={() => this.handleOperator('*')}>*</button>
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.handleOperator('-')}>-</button>
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.handleOperator('+')}>+</button>
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.handleCalculate()}>=</button>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('.')}>.</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
