import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      error: ''
    }
  }

  componentDidMount = () => {

  }


  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main className="Featured-Content">
          <h2>Featured Content</h2>
        </main>
      </div>
    )
  }
}

export default App;
