import React, { Component } from 'react';
import Trello from './trello.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Trello</h2>
        </div>
        <div className="maincontent">
          <Trello/>
        </div>
      </div>
    );
  }
}

export default App;
