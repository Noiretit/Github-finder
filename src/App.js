import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/Users'

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <div className='container'>
          <User/>
        </div>
      </div>
    );
  }
}

export default App;