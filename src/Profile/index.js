import React, { Component } from 'react'
import Post from '../Post'
import Shrubs from '../Shrublist'
import EditModal from '../Edit/EditModal'
import {
   Hello,
   
} from './style'

class Profile extends Component {
   state = {
      shrubs: [],
      username: this.props.userName,
      logged: false,
      userId: this.props.userId,
      showEditModal: false,
      shrubToEdit: {
      	id: null,
	description: ''
      }
   }
   
   async componentDidMount(){
      const allShrubs = await this.getShrubs();
      
      this.setState({
         shrubs: [...allShrubs]
      })
   }
   async componentWillUnmount(){
      this.setState({
         shrubs: []
      })
   }
   showModal = (shrub) => {
	   this.setState({
	   	shrubToEdit: shrub,
		showEditModal: !this.state.showEditModal
	   })
	   console.log(shrub, '<--- shrub')
	   console.log(this.state)
   }

   handleDelete = async (id) => {
      console.log(id)
      try{
         const deleteShrub = await fetch('http://localhost:8000/api/v1/' + id, {
            method: 'DELETE',
            credentials: 'include'
         })
         if(deleteShrub.status !== 200){
            throw Error('idk wat happened')
         }
         // const deleteShrubJson = await deleteShrub.json();
         // console.log(deleteShrubJson)
         this.setState({
            shrubs: this.state.shrubs.filter((shrub) => shrub.id !== id)
         })
         

      } catch(err){
         console.log(err)
         return err
      }
      
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
         shrubs: [...this.state.shrubs, parsedResponse.data]
       })
       
       return parsedResponse;
 
     } catch (err) {
       
       return err
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
            {/* { this.state.username.length === 0 ? <Redirect to="/" /> : '' } */}
            <Hello color={"yellow"}>HI {this.state.username}, post a pic</Hello>
            <Post addShrub={this.addShrub} author={this.state.username} id={this.state.userId}/>
            
               <Shrubs shrubs={this.state.shrubs} showModal={this.showModal} handleDelete={this.handleDelete}/>
            
	      {this.state.showEditModal ? <EditModal/> : null} 
         </div>
      )
   }

}
export default Profile
