import React, { Component } from 'react';
import SelectStore from './SelectStore'
import SearchResults from './SearchResults'
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
      title: ''
    }
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
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


  render() {
    return(
      <div>
        <form>
          <input placeholder='Enter Title(case sensitive)'></input>
          <button>Submit</button>
          <SelectStore stores={this.state.stores}/>
          <SortList />
        </form>
        <div className="SearchResults">
          <SearchResults deals={this.state.deals} stores={this.state.stores}/>
        </div>
      </div>
    )
  }
}

export default Search;
