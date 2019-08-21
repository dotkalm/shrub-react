import React , { Component } from 'react';
import './App.css';
import Login from './Login'
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'

class App extends Component {
  state = {
    username: '',
    email:'',
    password: '',
    userId:''
  }
  // async componentDidMount(){
  //     const allShrubs = await this.logIn();
  // }

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
        OK 
        <Switch>
          <Route exact path="/" render={(props)=>{
            return <Login {...props} logIn={this.logIn}/>
          }}/>
          <Route exact path='/profile' render={(props)=>{
            return <Profile {...props} userName={this.state.username} userId={this.state.userId}
            />
            
            
          }} />
          
        </Switch>
      </main>
    )
  }
}

export default App;
