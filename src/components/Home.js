import React from 'react'
import '../styles/Home.css'
import StoreIcon from './StoreIcon'
const Home = ({stores}) => {

  const storeList = stores.map(store => {

    return(
      <StoreIcon
        id={store.storeID}
        key={store.storeID}
        name={store.storeName}
        logo={store.images.logo}
      />
    )
  })

  return (
    <div>
      <h2>Some Cool Stuff!</h2>
      <p>Search from hundreds of titles, from reputable sources.</p>
      <div className="stores-container">
        {storeList}
      </div>
    </div>
  )
}


export default Home;
