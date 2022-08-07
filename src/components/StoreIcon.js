import React from 'react'
import '../styles/StoreIcon.css'


const StoreIcon = ({name, logo}) => {

  return(
    <div className="Home-Store-Container">
      <h3 className="Home-Store-Name">{name}</h3>
      <img className="Home-Logo" src={`https://www.cheapshark.com/${logo}`} />
    </div>
  )
}

export default StoreIcon;
