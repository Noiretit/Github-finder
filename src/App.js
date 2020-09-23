import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import SpecificUser from './components/users/SpecificUser'

import GithubState from './context/github/GithubState'

const App = () => {

  const [users, setUsers] = useState([]);
  const [specificUser, setSpecificUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    landingPage();
  }, [])

  const landingPage = () => {
    setLoading(true)

    async function fetchData() {
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      setUsers(res.data)
      setLoading(false)
      setSearched(false)
      //eslint-disable-next-line
    }
    fetchData();
  }
  //Search Github users
  

  //Get a single Github User
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setSpecificUser(res.data)
    setLoading(true)
  }

  //Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false);
  }

  //Takes you back to default
  const clearUsers = () => {
    landingPage();
  }

  //Set Alert
  const putAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000)
  }

  
    return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"/>
          <div className='container'>
            <Alert alert={alert}/>

            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    clearUsers={clearUsers} 
                    searched={searched}
                    putAlert={putAlert} />
                  <User loading={loading} users={users}/>
                </Fragment>
              )}/>

              <Route exact path='/about' component={About} />

              <Route exact path="/user/:login" render={props => (
                <SpecificUser 
                  { ...props} 
                  getUser={getUser} 
                  getUserRepos={getUserRepos}
                  specificUser={specificUser} 
                  repos={repos}
                  loading={loading} 
                  />
              )} />
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
