import React from 'react'
import PropTypes from 'prop-types'
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


FavoriteCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.price,
  removeFavorite: PropTypes
}
