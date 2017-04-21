import React, { Component } from 'react';
import logo from '../../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>scripts/views/app.js</code> and <code>css/pages/_home.css</code>.
        </p>
      </div>
    );
  }
}

export default App;
