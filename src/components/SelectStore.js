import React from 'react'
import '../styles/SelectStore.css'


const SelectStore = ({stores, handleChange}) => {

  const mapStores = stores.map(store => {
    return (
    <option key={store.storeID} value={`storeID=${store.storeID}`}>{store.storeName}</option>
    )
  })


  return(
    <select name="sortStore" onChange={event => handleChange(event)}>
      <option>Select Store</option>
      {mapStores}
    </select>
  )
}


export default SelectStore
