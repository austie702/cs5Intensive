import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Step 02: Class Component</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ClassComponent />
      </div>
    );
  }
}

export default App;
