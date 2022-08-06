import React from 'react'
import '../styles/SortList.css'


const SortList = ({handleChange}) => {

    return (
      <select name="sortRelevence" onChange={event => handleChange(event)}>
        <option>Relevence</option>
        <option value="Deal Rating">Deal Rating</option>
        <option value="title">Name</option>
        <option value="Reviews">Reviews</option>
        <option value="Relase">Release Date</option>
        <option value="lowerPrice">Lower Price</option>
        <option value="upperPrice">Upper Price</option>
      </select>
    )
}

export default SortList
