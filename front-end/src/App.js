import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  UPDATE_TOKEN,
  UPDATE_USER
} from './store/actions/userAction'


import axiosInstance from './helper';

// Header and Nav
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

// import pages
import Login from './pages/Login';
import Register from './pages/Register'

import Load from './pages/Load'
import Home from './pages/Home'
import Friends from './pages/Friends'
import Videos from './pages/Videos'
import Notifications from './pages/Notifications'
import Menu from './pages/Menu'

import Profile from './pages/Profile'



function App() {

  const [loading, setLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const userToken = useSelector(state => state.userToken)
  const dispatch = useDispatch()

  useEffect(() => {
    const tok = localStorage.getItem('token')
    dispatch({
      type: UPDATE_TOKEN,
      payload: tok
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    if (userToken != '') {
      setIsLogged(true)

      axiosInstance.get('/api/user', {
        headers: {
          'Authorization': `token ${userToken}`
        }
      }).then(res => {
        dispatch({
          type: UPDATE_USER,
          payload: res.data
        })
      }).catch(err => {
        console.log(err)
      })

    } else {
      setIsLogged(false)
    }
    setLoading(false)

  }, [userToken])



  const loggedUser = () => {
    return (
      <Switch>
        <Route exact path='/friends' component={Friends} />
        <Route exact path='/videos' component={Videos} />
        <Route exact path='/notifications' component={Notifications} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }

  const nonLoggedUser = () => {
    return (
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route path='/' component={Login} />
      </Switch>
    )
  }




  const isLoadedData = () => {
    return (
      <div className='light'>
        <Router>
          <div className="header-options">
            <Header />
            <Nav />
          </div>
          {
            isLogged ? loggedUser() : nonLoggedUser()
          }
        </Router>
      </div>
    )
  }

  const isNotLoaded = () => {
    return <Load />
  }

  return loading ? isNotLoaded() : isLoadedData();

}

export default App;
