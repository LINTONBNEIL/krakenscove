import React, { Component } from 'react';
import { listOfDeals, listOfGames, listOfStores } from '../apiCalls'
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      store: '',
      
    }
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render() {
    return(
      <div>
        <form>
          <div className="narrowPrice">
          </div>
          <div className="radio-buttons">
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
