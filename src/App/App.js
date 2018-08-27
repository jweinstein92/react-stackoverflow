import React, { Component } from 'react';
import logo from '../logo.svg';
import app from './App.scss';
import stackoverflow from '../stackoverflow.scss';
console.log(stackoverflow);

class App extends Component {
  render() {
    return (
      <div className={app.app}>
        <header className={app.header}>
          <span className={stackoverflow.logo}>Stack Overflow</span>
        </header>
        <p className={app.intro}>
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
