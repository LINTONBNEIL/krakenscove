import React from 'react'
import PropTypes from 'prop-types'
import FavoriteCard from './FavoriteCard'
import '../styles/Wishlist.css'

const Wishlist = ({favorites, removeFavorite, removeAllFavorite}) => {

const displayList = favorites.map(favGame => {
  return (
    <FavoriteCard id={favGame.id} key={favGame.id} title={favGame.title} picture={favGame.picture} price={favGame.price} removeFavorite={removeFavorite}/>
  )
})

const calculateTotal = favorites.reduce((acc, item) => {
  let total = parseInt(item.price)

  return acc += total
}, 0)

  return(
    <div>
      <h2>Wishlist container Title</h2>
      {favorites.length > 0 ?
      <div className="fav-card-list">
        {displayList}
      </div> : <h3 className="fav-error">Currently You have nothing favorited!</h3>}
      {favorites.length > 0 ? <p>{`Total: $${calculateTotal}`}</p> : <p>Find a game to favorite!</p> }
      {favorites.length > 0 && <button onClick={removeAllFavorite}>Remove All</button>}
    </div>
  )
}

export default Wishlist;

Wishlist.propTypes = {
  favorites: PropTypes.array,
  favorites: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func,
  removeAllFavorite: PropTypes.func
}
