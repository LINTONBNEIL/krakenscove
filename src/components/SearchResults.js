import React from 'react'
import GameCard from './GameCard'
import '../styles/SearchResults.css'

const SearchResults = ({deals, stores}) => {


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
        releaseDate={deal.releaseDate}
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
