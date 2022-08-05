import React, { Component } from 'react';
import SelectStore from './SelectStore'
import SortList from './SortList'
import { listOfDeals, listOfGames, listOfStores } from '../apiCalls'
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      selectedStore: '',
      SortList: ''
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
      </div>
    )
  }
}

export default Search;
