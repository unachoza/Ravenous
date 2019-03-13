import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}

export default App;
