import React, { Component } from 'react';
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import Header from './Header';
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topDeals: [],
      error: ''
    }
  }

  componentDidMount = () => {
    const newDeals = 'steamRating=90&metacritic=90&sortBy=Release'
    listOfDeals(newDeals)
    .then(data => {
      this.setState({
        topDeals: data
      })
    })
    .catch(error => {
      this.setState({
        error: error.message
      })
    })
  };


  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <GameCard />
      </div>
    )
  }
}

export default App;
