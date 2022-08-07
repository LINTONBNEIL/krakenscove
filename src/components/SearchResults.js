import React from 'react'
import GameCard from './GameCard'
import PropTypes from 'prop-types'
import '../styles/SearchResults.css'

const SearchResults = ({deals, stores, addFavorite}) => {


  const filterDeals = () => {
    let gameID = []
    const noDuplicates = deals.reduce((acc, deal) => {

      if (!gameID.includes(deal.gameID)) {
        gameID.push(deal.gameID)
        acc.push(deal)
      }

      return acc
    }, [])
    return noDuplicates
  }

const findLogo = (deal) => {
  let logo = stores.reduce((acc, store) => {

    if (deal.storeID === store.storeID) {
      acc = store.images.logo
      }

    return acc
  },'')
  return logo
}

const findPercentage = (deal) => {
  let roundNumber = Math.round(deal.savings)

  return roundNumber
}



  const displayDeals = filterDeals().map(deal => {
    return (
      <GameCard
        id={deal.dealID}
        key={deal.dealID}
        gameID={deal.gameID}
        dealID={deal.dealID}
        storeID={deal.storeID}
        storeLogo={findLogo(deal)}
        thumb={deal.thumb}
        title={deal.title}
        savings={findPercentage(deal)}
        steamRatingText={deal.steamRatingText}
        normalPrice={deal.normalPrice}
        salePrice={deal.salePrice}
      />
    )
  })


  return (
    <>
    {displayDeals}
    </>
  )
}


export default SearchResults;

SearchResults.propTypes = {
  deals: PropTypes.array,
  stores: PropTypes.array,
  addFavorite: PropTypes.func
}
