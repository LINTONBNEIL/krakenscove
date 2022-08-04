import React, { Component } from 'react'
import './Wishlist.css'

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return(
      <div>
        <h2>Wishlist container Title</h2>
        <p>Items container</p>
        <p>Total</p>
        <button>Remove All</button>
      </div>
    )
  }
}

export default Wishlist
