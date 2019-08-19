import React, { Component } from 'react';
import logo from '@/assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>scripts/views/app.jsx</code> and{' '}
          <code>styles/pages/_home.scss</code>.
        </p>
        <p>
          thx{' '}
          <a
            className="app-link"
            href="//balmjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BalmJS
          </a>
        </p>
      </div>
    );
  }
}

export default App;
