import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
	    Hello Snehil!
          
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="validate.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Validation Results
          </a>
        </header>
      </div>
    );
  }
}

export default App;
