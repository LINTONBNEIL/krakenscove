import React from 'react'
import '../styles/SelectStore.css'


const SelectStore = ({stores}) => {
  const mapStores = stores.map(store => {
    return (
      <option key={store.storeID} value={store.storeID}>{store.storeName}</option>
    )
  })

  return(
    <select>
      <option>Search Store</option>
      {mapStores}
    </select>
  )
}


export default SelectStore
