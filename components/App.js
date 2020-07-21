import React, { Component } from 'react';
import HomePage from './HomePage';
import '../styles/style.scss';



class App extends Component {
  render() {
    return (
      <div className="app">
        <HomePage />
        <div className="darkOverlay hidden" id="darkOverlay"></div>
      </div>
    )
  }
}

export default App;
