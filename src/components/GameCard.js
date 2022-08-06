import React from 'react'
import '../styles/GameCard.css'


const GameCard = ({id, gameID, dealID, storeID, thumb, title, steamRatingText, normalPrice, salePrice, storeLogo}) => {


  return (
    <div className="GameCard">
      <img src={thumb} alt={title}/>
      <span>
        <h2>{title}</h2>
      </span>
      <div className="Logo-Container">
        <img className="logo" src={`https://www.cheapshark.com/${storeLogo}`} />
      </div>
      <div className="Price-Cut">
        <h3>{normalPrice}</h3>
        <h3>{salePrice}</h3>
      </div>
        <h3>{steamRatingText}</h3>
    </div>
  )
}

export default GameCard;
