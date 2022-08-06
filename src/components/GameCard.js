import React from 'react'
import '../styles/GameCard.css'


const GameCard = ({id, gameID, dealID, storeID, thumb, title, savings, steamRatingText, normalPrice, salePrice, storeLogo}) => {


  return (
    <div className="Game-Card">
      <div className="Game-Img-Container">
        <img className="Game-Img" src={thumb} alt={title}/>
      </div>
      <div className="Game-Title">
        <h2 className="Title">{title}</h2>
      </div>
      <div className="Price-Percentage">
        <h3 className="Savings">{`%${savings}`}</h3>
      </div>
      <div className="Price-Cut">
        <h3 className="normalPrice">{`$${normalPrice}`}</h3>
        <h3 className="salePrice">{`$${salePrice}`}</h3>
      </div>
    </div>
  )
}

export default GameCard;
