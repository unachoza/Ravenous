import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business'
import BusinessList from './components/BusinessList/BusinessList';

class App extends Component {
  render() {
    return (
      <div>
        <BusinessList/>
      </div>
    );
  }
}

export default App;
