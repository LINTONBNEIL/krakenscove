import React from 'react'
import '../styles/StoreIcon.css'


const StoreIcon = ({name, logo}) => {

  return(
    <div>
      <h2>{name}</h2>
      <img src={`https://www.cheapshark.com/${logo}`} />
    </div>
  )
}

export default StoreIcon;
