import React, { Component } from 'react'
// import Hello from './hello';
import PlayingVid from '../Vid'

import {
   LogStyle,
   
} from './style'
class Login extends Component {
   state = {
      username: '',
      email:'',
      password: '',
      isLogged: false,
      alias: '',
      attempts: 0
   }
   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
   }
   handleRedirect = async (e) => {
      e.preventDefault();
      this.props.history.push('/register')
   }
   handleSubmit = async (e) => {
      e.preventDefault();
      const login = this.props.logIn(this.state)
      login.then((data) => {
         if(data.status.message === 'Success'){
            this.setState({
               isLogged: true,
               alias: data.data.username
           })
           this.props.history.push('/profile')
         } else if(data.status.code !== '201'){
            this.setState({
               attempts: this.state.attempts + 1,
               alias: data.data.username
           })
         }else {
           
         }
       }).catch((err) => {
         console.log(err)
       })
   }
   
   render(){
      
      return (
         <div>
            {/* <Hello/> */}
            <LogStyle>
            <form onSubmit={this.handleSubmit}>
              username: 
              <input placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
              password: <input type='password' placeholder='Password' name='password'onChange={this.handleChange}/>
              <button type='submit'>LOG IN</button>
            </form>
            </LogStyle>
            <h1>{ this.state.attempts>0 ?  `Wrong Username or Password -- ${this.state.attempts} failed attempts`  
            : <br/>}</h1>
            <form onSubmit={this.handleRedirect}>
               <button type='submit' >REGISTER</button>
            </form>
            
            <PlayingVid/>
            

            
         </div>
      )
   }
}

export default Login;
