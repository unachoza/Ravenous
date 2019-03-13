import React, { Component } from 'react';
import './App.css';
import Business from './components/Business/Business'
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar'
import Yelp from '../src/util/Yelp'
import yelp from '../src/util/Yelp';

// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// } 

// const businessess = [ business, business, business, business, business, business]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      businessess: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp = (term, location, sortBy) => {
    yelp.searchYelp(term, location,sortBy).then((businessess) => {
      this.setState({businessess: businessess})
    })
     console.log(`Searching Yelp for ${term} in ${location} with ${sortBy} in mind`)
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businessess={this.state.businessess}/>
      </div>
    );
  }
}

export default App;
