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
    <div className="Home">
      <h2>Some Cool Stuff!</h2>
      <div className="Stores-Container">
        {storeList}
      </div>
    </div>
  )
}


export default Home;
