import React, { Component } from 'react';
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import Search from './Search'
import Home from './Home'
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      stores: [],
      error: ''
    }
  }

  // componentDidMount = () => {
  //   listOfStores()
  //   .then(results => {
  //     const filteredStores = results.filter(result => result.isActive)
  //     this.setState({stores: filteredStores})
  //   })
  //   .catch(error => console.log(error))
  // }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Search />
      </div>
    )
  }
}

export default App;
