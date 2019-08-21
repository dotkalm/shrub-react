import React , { Component } from 'react';
import './App.css';
import Login from './Login'
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'

class App extends Component {
  state = {
    username: '',
    email:'',
    password: ''
  }
  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch('http://localhost:8000/user/login/', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();


      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err) {
      console.log(err)
    }
  }
  render(){
    return (
      <main>
        OK 
        <Switch>
          <Route exact path="/" render={(props)=>{
            return <Login {...props} logIn={this.logIn}/>
          }}/>
          <Route exact path='/profile' render={(props)=>{
            return <Profile {...props} logIn={this.logIn}/>
          }} />
          
        </Switch>
      </main>
    )
  }
}

export default App;
