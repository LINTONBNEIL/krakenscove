import React, { Component } from 'react'
import { listOfDeals, listOfStores, listOfGames } from '../apiCalls';
import '../styles/GameDetails.css'


class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      gameList: [],
      filteredGames: []
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




  render() {
    return(
      <div>
        <h2>{this.state.game['name']}</h2>
        <div>
          <img src={this.state.game['thumb']} alt={this.state.game['name']} />
        </div>
        <div>
          <p>{`Retail: $${this.state.game['retailPrice']}`}</p>
          <p>{`Sale: $${this.state.game['salePrice']}`}</p>
          <div>
            <button>link</button>
            <button>Favorite</button>
          </div>
        </div>
      </div>
    )
  }
}


export default GameDetails;
