import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {

  state = {
    users: [],
    loading: false,
    searched: false
  }

  //When component is mounting (data is being fetched) we change "loading" to
  //false so the spinner is showing 
  async componentDidMount(){
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    this.setState({ users: res.data, loading: false, searched: false})
  };

  //Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data.items, loading: false, searched: true})
  };

  //Takes you back to default
  clearUsers = () => this.componentDidMount();

  render() {
  
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <div className='container'>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} searched={this.state.searched} />
          <User loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
