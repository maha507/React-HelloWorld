// src/App.js
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', result: null };
  }

  calculate = (operation) => {
    const { num1, num2 } = this.state;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operation) {
      case 'add':
        result = n1 + n2;
        break;
      case 'subtract':
        result = n1 - n2;
        break;
      case 'multiply':
        result = n1 * n2;
        break;
      case 'divide':
        result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }

    this.setState({ result });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const calculatorStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
      backgroundColor: '#f9f9f9'
    };

    const inputStyle = {
      width: '80%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc'
    };

    const buttonStyle = {
      padding: '10px 20px',
      margin: '5px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      color: '#fff'
    };

    const buttonContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    };

    const resultStyle = {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#333',
      marginTop: '20px'
    };

    return (
      <div style={calculatorStyle}>
        <h2>Simple Calculator</h2>
        <input
          type="number"
          name="num1"
          style={inputStyle}
          placeholder="Enter first number"
          value={this.state.num1}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="num2"
          style={inputStyle}
          placeholder="Enter second number"
          value={this.state.num2}
          onChange={this.handleChange}
        />
        <div style={buttonContainerStyle}>
          <button style={{ ...buttonStyle, backgroundColor: '#4CAF50' }} onClick={() => this.calculate('add')}>Add</button>
          <button style={{ ...buttonStyle, backgroundColor: '#2196F3' }} onClick={() => this.calculate('subtract')}>Subtract</button>
          <button style={{ ...buttonStyle, backgroundColor: '#FF9800' }} onClick={() => this.calculate('multiply')}>Multiply</button>
          <button style={{ ...buttonStyle, backgroundColor: '#F44336' }} onClick={() => this.calculate('divide')}>Divide</button>
        </div>
        <h3 style={resultStyle}>Result: {this.state.result}</h3>
      </div>
    );
  }
}

export default Calculator;
