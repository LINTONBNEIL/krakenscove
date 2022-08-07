import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/GameCard.css'


const GameCard = ({id, gameID, dealID, storeID, thumb, title, savings, steamRatingText, normalPrice, salePrice, storeLogo}) => {


  return (
  <Link to={`/GameDetails/${dealID}`}>
    <div className="Game-Card">
      <div className="Game-Img-Container">
        <img className="Game-Img" src={thumb} alt={title}/>
      </div>
      <div className="Game-Title-Container">
        <h2 className="Game-Title">{title}</h2>
      </div>
      <div className="Price-Percentage">
        <h3 className="Savings">{`${savings}%`}</h3>
      </div>
      <div className="Price-Cut">
        <h3 className="normalPrice">{`$${normalPrice}`}</h3>
        <h3 className="salePrice">{`$${salePrice}`}</h3>
      </div>
      <div className="Logo-Container">
        <img className="Store-Logo" src={`https://www.cheapshark.com/${storeLogo}`} />
      </div>
    </div>
  </Link>
  )
}

export default GameCard;

GameCard.propTypes = {
  id: PropTypes.string,
  gameID: PropTypes.string,
  dealID: PropTypes.string,
  storeID: PropTypes.string,
  thumb: PropTypes.string,
  title: PropTypes.string,
  savings: PropTypes.string,
  steamRatingText: PropTypes.string,
  normalPrice: PropTypes.string,
  salePrice: PropTypes.string,
  storeLogo: PropTypes.string
}
