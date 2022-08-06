import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {

  return (
    <div className="Nav-Banner">
      <header className="Header">
        <h2>ICON</h2>
        <h1 className="Title">TITLE</h1>
      </header>
      <nav className="Nav-Container">
        <button>HOME</button>
        <button>SEARCH</button>
        <button>WISHLIST</button>
      </nav>
    </div>
  )
}

export default NavBar;
