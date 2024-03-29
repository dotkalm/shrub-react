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
      showPostModal: false,	   
      showEditModal: false,
      shrubToEdit: {
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
   handlePostSubmit = async (e) => {
	e.preventDefault()   
   	this.setState({
		showPostModal: !this.state.showPostModal
	})
   }
   showModal = (shrub) => {
	   this.setState({
	   	shrubToEdit: shrub,
		showEditModal: !this.state.showEditModal
	   })
   }
   handleFormChange = (e) => {
      this.setState({
         shrubToEdit: {
            ...this.state.shrubToEdit,
            [e.target.name] : e.target.value,

         }
      })
   }
   closeAndEdit = async (id) => {
   	try{
         const editRequest = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/' + id, {
		 method: 'PUT',
		 credentials: 'include',
		 body: JSON.stringify(this.state.shrubToEdit),
		 headers: {
			 'Content-Type': 'application/json'
		 }
	 })
		if(editRequest.status !== 200){
			throw Error('not working')
		}
		const editResponse = await editRequest.json();
		const editedShrubArray = this.state.shrubs.map((shrub) =>{
			if(shrub.id === editResponse.data.id){
				shrub = editResponse.data
			}
			return shrub
		})
	   	this.setState({
		showEditModal: !this.state.showEditModal
	   })

	} catch(err){
	console.log(err)
	return err
	}
   }
   handleDelete = async (id) => {
      try{
         const deleteShrub = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/' + id, {
            method: 'DELETE',
            credentials: 'include'
         })
         if(deleteShrub.status !== 200){
            throw Error('idk wat happened')
         }
         // const deleteShrubJson = await deleteShrub.json();
         // console.log(deleteShrubJson)
         this.setState({
            shrubs: this.state.shrubs.filter((shrub) => shrub.id !== id),
	    showEditModal: !this.state.showEditModal
         })
         

      } catch(err){
         console.log(err)
         return err
      }
      
   }
   addShrub = async (data) => {
      try {
         
       const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/', {
         method: 'POST',
         credentials: 'include',
         body: data,
         headers: {
            'enctype': 'multipart/form-data'
         }
       })
 
       const parsedResponse = await registerResponse.json(); 
       this.setState({
         shrubs: [...this.state.shrubs, parsedResponse.data],
	 showPostModal: !this.state.showPostModal
       })
       
       return parsedResponse;
 
     } catch (err) {
       
       return err
     }
   }
   
   getShrubs = async () => {
      try {
         const responseGetShrubs = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/', {
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
	      {this.state.showEditModal ? <EditModal closeAndEdit={this.closeAndEdit} close={this.showModal} shrub={this.state.shrubToEdit} delete={this.handleDelete} handleFormChange={this.handleFormChange} /> : null} 
	      
            <Hello color={"yellow"}>
	      HI {this.state.username},<form onSubmit={this.handlePostSubmit}>
	      	<button> post</button> 
	      </form>
	      a pic</Hello>	      
	      {this.state.showPostModal ? <Post addShrub={this.addShrub} author={this.state.username} id={this.state.userId}/> : null}            
               <Shrubs user={this.state.userId} shrubs={this.state.shrubs} showModal={this.showModal} handleDelete={this.handleDelete}/>
            
         </div>
      )
   }

}
export default Profile
