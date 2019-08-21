import React, { Component } from 'react'
import Post from '../Post'
import Shrubs from '../Shrublist'

class Profile extends Component {
   state = {
      shrubs: [],
      username: this.props.userName,
      logged: false,
      userId: this.props.userId
   }
   async componentDidMount(){
      const allShrubs = await this.getShrubs();
      
      this.setState({
         shrubs: [...allShrubs]
      })
      
   }
   addShrub = async (data) => {
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
       this.setState({
         ...parsedResponse.data,
         loading: false
       })
       return parsedResponse;
 
     } catch (err) {
       console.log(err)
     }
   }
   getShrubs = async () => {
      try {
         const responseGetShrubs = await fetch('http://localhost:8000/api/v1/', {
            credentials: 'include',
            method: 'GET'
         })
         if(responseGetShrubs.status !== 200){
            throw Error('404 from server');
         }
         const shrubResponse = await responseGetShrubs.json()
         return shrubResponse.data
      } catch(err){
         console.log(err, '<- get shrub error')
         return err
      }

   }
   render(){
     
      return(
         <div>
            HI {this.state.username}, post a pic
            <Post addShrub={this.addShrub} author={this.state.username} id={this.state.userId}/>
            <Shrubs shrubs={this.state.shrubs}/>
         </div>
      )
   }

}
export default Profile