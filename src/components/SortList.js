import React from 'react'
import '../styles/SortList.css'


const SortList = ({handleChange}) => {

    return (
      <select name="sortRelevence" onChange={event => handleChange(event)}>
        <option>Relevence</option>
        <option value="sortBy=Deal Rating">Deal Rating</option>
        <option value="sortBy=Reviews">Reviews</option>
        <option value="sortBy=Relase">Release Date</option>
        <option value="sortBy=Price&upperPrice=50&desc=1">Highest Price</option>
        <option value="sortBy=Price&lowerPrice=0">Lowest Price</option>
      </select>
    )
}

export default SortList
