import React, { Component } from 'react';
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import Search from './Search'
import Home from './Home'
import Wishlist from './Wishlist'
import NavBar from './NavBar';
import GameDetails from './GameDetails'
import { Route } from 'react-router-dom'
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

  componentDidMount = () => {
    listOfStores()
    .then(results => {
      const filteredStores = results.filter(result => result.isActive)
      this.setState({stores: filteredStores})
    })
    .catch(error => console.log(error))
  }

  addFavorite = (favorite) => {
    this.setState({
      favorites: [...this.state.favorites, favorite]
    })
  }

  removeFavorite = (id) => {
    const filterFavorites = this.state.favorites.filter(favItem => favItem.id !== id)

    this.setState({favorites: filterFavorites})
  }

  removeAllFavorite = () => {
    this.setState({
      favorites: []
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <Home stores={this.state.stores}/>} />
        <Route exact path="/Search" render={() => <Search  />} />
        <Route exact path="/Wishlist" render={() => <Wishlist favorites={this.state.favorites} removeFavorite={this.removeFavorite} removeAllFavorite={this.removeAllFavorite}/>} />
        <Route exact path="/GameDetails/:dealID" render={({match}) => <GameDetails addFavorite={this.addFavorite} dealID={match.params.dealID}/>}/>
      </div>
    )
  }
}

export default App;
