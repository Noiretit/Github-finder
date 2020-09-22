import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  //When component is mounting (data is being fetched) we change "loading" to
  //false so the spinner is showing 
  async componentDidMount(){
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users')
    
    this.setState({ users: res.data, loading: false})
  }

  render() {
  
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <div className='container'>
          <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
