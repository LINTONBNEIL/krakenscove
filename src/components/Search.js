import React, { Component } from 'react';
import SelectStore from './SelectStore'
import SearchResults from './SearchResults'
import PropTypes from 'prop-types'
import SortList from './SortList'
import { listOfDeals, listOfGames, listOfStores } from '../apiCalls'
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      deals: [],
      sortStore: '',
      sortRelevence: '',
      title: '',
      error: ''
    }
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  if (!this.state.title && !this.state.sortStore && !this.state.sortRelevence) {
    this.setState({
      error: 'Unable to make request, please search using the viable parameters'
    })
    console.log("Ouch")
  }
  this.displayNewSearch()
}

componentDidMount = () => {
  listOfStores()
  .then(results => {
    const filteredStores = results.filter(result => result.isActive)
    this.setState({stores: filteredStores})
  })
  .catch(error => console.log(error))

  listOfDeals()
  .then(results => {
    this.setState({deals: results})
  })
  .catch(error => console.log(error))
}

displayNewSearch = () => {
    const parameters = `title=${this.state.title}&${this.state.sortStore}&${this.state.sortRelevence}`
    listOfDeals(parameters)
    .then(result => {
      this.setState({deals: result})
    })
    .catch(error => console.log(error))
}


  render() {
    return(
      <div className="Search-Screen">
        <form className="Form">
          <input name="title" placeholder='Search Titles' onChange={event => this.handleChange(event)}></input>
          <button className="Form-Button" onClick={event => this.handleSubmit(event)}>Submit</button>
          <SelectStore stores={this.state.stores} handleChange={event => this.handleChange(event)}/>
          <SortList handleChange={event => this.handleChange(event)}/>
        </form>
        <div className="Search-Results">
          <SearchResults deals={this.state.deals} stores={this.state.stores}/>
        </div>
      </div>
    )
  }
}

export default Search;
