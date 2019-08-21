import React, { Component } from 'react'
import Post from '../Post'

class Profile extends Component {
   state = {
      shrubs: [],
      username: this.props.userName,
      logged: false,
      userId: this.props.userId
   }
   
   addShrub = async (data) => {
      // console.log(data, '<--form data?')
      try {
         
       const registerResponse = await fetch('http://localhost:8000/api/v1/', {
         method: 'POST',
         credentials: 'include',// on every request we have to send the cookie
         body: data,
         headers: {
            'enctype': 'multipart/form-data'
         }
       })
 
       const parsedResponse = await registerResponse.json();
 
       console.log(parsedResponse, 'PARSED RESPONSE')
 
       this.setState({
         ...parsedResponse.data,
         loading: false
       })
       return parsedResponse;
 
     } catch (err) {
       console.log(err)
     }
   }

   render(){
     
      return(
         <div>
            HI {this.state.username}, post a pic
            <Post addShrub={this.addShrub} author={this.state.username} id={this.state.userId}/>
         </div>
      )
   }

}
export default Profile