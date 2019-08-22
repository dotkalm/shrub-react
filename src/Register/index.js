import React , { Component } from 'react';

class Register extends Component {
   state = {
      username: '',
      email: '',
      password: ''
   }
handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
}
handleSubmit = async (e) => {
   e.preventDefault();
   const register = this.props.registerUser(this.state)
   register.then((data) => {

      console.log(data,' <--- register data')
      if(data.status.message === 'Success'){
         
         this.props.history.push('/profile')
      } else if(data.status.code !== '201'){
         console.log('not ok')
      }else {
         console.log('could be ok or not')
      }
    }).catch((err) => {
      console.log(err)
    })
}

render(){
   return(
      <div>
         <form onSubmit={this.handleSubmit}>
            <input placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
            <input placeholder='password' type='password' name='password' onChange={this.handleChange}/>
            <input placeholder='email address' type='email' name='email' onChange={this.handleChange}/>
            <button type='submit'>Register</button>
         </form>


      </div>
   )
}

}

export default Register 