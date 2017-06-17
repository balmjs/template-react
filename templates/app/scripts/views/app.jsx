import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.logo = require('../../images/logo.svg');
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={this.logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>scripts/views/app.js</code> and <code>css/pages/_home.css</code>.
        </p>
        <p>thx <a href="//balmjs.com/">BalmJS</a></p>
      </div>
    );
  }
}

export default App;
