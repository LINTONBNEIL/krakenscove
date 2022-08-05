import React, { Component } from 'react';
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import Header from './Header';
import Home from './Home'
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      stores: [],
      error: ''
    }
  }

  componentDidMount = () => {
    listOfStores()
    .then(results => this.filterResults(results))
    .catch(error => console.log(error))
  };

  filterResults = (results) => {
    const filteredStores = results.filter(result => result.isActive)
    this.setState({ stores: filteredStores })
    console.log(this.state.stores)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Home stores={this.state.stores}/>
      </div>
    )
  }
}

export default App;
