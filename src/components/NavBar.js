import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {

  return (
    <div className="Nav-Banner">
      <header className="Header">
        <h2 className="Web-Icon">ICON</h2>
        <h1 className="Title">Krakens Cove</h1>
      </header>
      <nav className="Nav-Container">
      <NavLink to="/"><button>HOME</button></NavLink>
      <NavLink to="/Search"><button>SEARCH</button></NavLink>
      <NavLink to="/Wishlist"><button>WISHLIST</button></NavLink>
      </nav>
    </div>
  )
}

export default NavBar;
