import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar'

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
} 

const businessess = [ business, business, business, business, business, business]

class App extends Component {

  searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp for ${term} in ${location} with ${sortBy} in mind`)
  }
  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businessess={businessess}/>
      </div>
    );
  }
}

export default App;
