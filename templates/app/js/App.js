import React, { Component } from 'react';
import logo from '../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>js/App.js</code> and <code>css/_App.css</code>.
        </p>
      </div>
    );
  }
}

export default App;
