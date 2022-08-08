import React, { Component } from 'react'
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import '../styles/GameDetails.css'


class GameDetails extends Component {
  constructor() {
    super();
    this.state = {
      game: {},
      gameList: [],
    }
  }

  componentDidMount = () => {
    listOfDeals(`id=${this.props.dealID}`)
      .then(results => {
        this.setState({ game: results.gameInfo })
        this.loadGameList(results.gameInfo)
      })
      .catch(error => console.log(error))
  }

  loadGameList = (game) => {
    listOfGames(`id=${game['gameID']}`)
    .then(data => {
      this.setState({ gameList: data.deals })
    })
    .catch(error => console.log(error))
  }

handleFavorite = () => {
  let favorite = {
    id: this.props.dealID,
    title: this.state.game['name'],
    picture: this.state.game['thumb'],
    price: this.state.game['salePrice']
  }
  this.props.addFavorite(favorite)
}


  render() {
    return(
      <div>
        <h2 className="Detail-Title">{this.state.game['name']}</h2>
        <div>
          <img className="Detail-Poster"src={this.state.game['thumb']} alt={this.state.game['name']} />
        </div>
        <div>
          <h3>{`Retail: $${this.state.game['retailPrice']}`}</h3>
          <h3>{`Sale: $${this.state.game['salePrice']}`}</h3>
          <div>
            <button>link</button>
            <button className="Detail-Favorites" onClick={this.handleFavorite}>Favorite</button>
          </div>
        </div>
      </div>
    )
  }
}


export default GameDetails;
