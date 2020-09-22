import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'

class App extends Component {

  state = {
    users: [],
    loading: false,
    searched: false,
    alert: null
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

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type} });
    setTimeout(() => this.setState({alert: null}), 5000)
  }

  render() {
    
    const {searched, loading, users, alert} = this.state;
  
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"/>
          <div className='container'>
            <Alert alert={alert}/>

            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    searched={searched}
                    setAlert={this.setAlert} />
                  <User loading={loading} users={users}/>
                </Fragment>
              )}/>

              <Route exact path='/about' component={About} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
