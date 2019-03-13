import React, {Component} from 'react'
import './SearchBar.css'

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Match": "rating",
    "Most Reviewed": "review_count"
}

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            'term': '',
            'location': '',
            'sortBy': 'best_match'
        }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
    }
    getSortedByClass = (sortByOption) =>{ 
        return this.state.sortBy === sortByOption ? 'active' : ''
    }
    handleSortByChange = (sortByOption) => {
        this.setState({'sortBy': sortByOption})
    }
     renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li className={this.getSortedByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        })
    }

    handleTermChange = (e) => {
        this.setState({'term': e.target.value})
    }

    handleLocationChange = (e) => {
        this.setState({'location': e.target.value})
    }
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange}placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange}placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar