import React, { Component } from 'react'
// import Hello from './hello';

class Login extends Component {
   state = {
      username: '',
      email:'',
      password: '',
      isLogged: false,
      alias: ''
   }
   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
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
           
         //   this.props.history.push('/profile')
           console.log(this.props)
         } else {
           console.log(data, this.props)
         }
       }).catch((err) => {
         console.log(err)
       })
   }
   render(){
      const name = this.state.alias
      console.log(name)
      return (
         <div>
            {/* <Hello/> */}
            <form onSubmit={this.handleSubmit}>
              username: 
              <input placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
              password: <input type='password' name='password'onChange={this.handleChange}/>
              <button type='submit'>LOG IN</button>
            </form>
            <h1>{ this.state.isLogged ?  `Hi ${name} you are logged in.`  
            : <br></br>}</h1>

            
         </div>
      )
   }
}

export default Login;