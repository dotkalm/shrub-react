import React , { Component } from 'react';
import './App.css';
import Login from './Login'
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'
import Register from './Register'
import FourZeroFour from './404'
import CheckGreen from './checkGreen'
class App extends Component {
  state = {
    username: '',
    email:'',
    password: '',
    userId:''
  }
  registerUser = async (registrationInfo) => {
    try {
      const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + 'user/register/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(registrationInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse)
      this.setState(() =>{
        this.state.userId = parsedResponse.data.id})
      this.setState(() => {
        this.state.username = parsedResponse.data.username
        return {
          ...parsedResponse.data,
          loading: false
        }
      })
      return parsedResponse  
    } catch(err){
      console.log(err)
    }
  }
  // checkGreen = async (colorInfo) => {
  //   try {

  //   } catch(err){
  //     console.log(err)
  //   }
  // }
  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + 'user/login/', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();
      
      this.setState(() =>{
        this.state.userId = parsedResponse.data.id})
      this.setState(() => {
        this.state.username = parsedResponse.data.username
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
        <Switch>
          <Route exact path="/" render={(props)=>{
            return <Login {...props} logIn={this.logIn}/>
          }}/>
          <Route exact path='/register' render={(props)=> {return <Register {...props} registerUser={this.registerUser}/>}}/>
          <Route exact path='/profile' render={(props)=>{ return <Profile {...props} userName={this.state.username} userId={this.state.userId}/>}} />
          <Route exact path='/checkGreen' render={(props)=>{return <CheckGreen {...props} userName={this.state.username} userId={this.state.userId} checkGreen={this.checkGreen}/>}} />
          <Route render={()=>{return<FourZeroFour/>}}/>
          
        </Switch>
      </main>
    )
  }
}

export default App;
