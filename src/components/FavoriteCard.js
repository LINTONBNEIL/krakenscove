import React from 'react'
import '../styles/FavoriteCard.css'

const FavoriteCard = ({id, title, picture, price, removeFavorite}) => {

  return(
    <div className="fav-card">
      <h3>{title}</h3>
      <img src={picture} alt={title} />
      <p>{`Sale Price: $${price}`}</p>
      <button onClick={() => removeFavorite(id)}>Unfavorite</button>
    </div>
  )
}

export default FavoriteCard;
