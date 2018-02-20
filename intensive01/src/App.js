import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Step 01: This is a Functional Component
function FunctionalComponent01() {
  return (
  <div>
    <h3>This is my Functional Component</h3>
  </div>
  )
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CS5 Intensive</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FunctionalComponent01 />
      </div>
    );
  }
}

export default App;
