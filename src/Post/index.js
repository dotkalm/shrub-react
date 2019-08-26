import React, { Component }from 'react'
import {PostForm} from './style'
class Post extends Component {
   state = {
      author: this.props.author,
      image: {},
      location: '',
      description: '',
      id: this.props.id

   }
   handleChange = (e) => {
      if(e.target.name !== 'image'){
        this.setState({[e.target.name]: e.target.value});
      } else {
        // file upload
        
        this.setState({image: e.target.files[0]});
      }
    }
    handleSubmit = async (e) => {
      e.preventDefault();
      
      const data = new FormData();
      data.append('file', this.state.image);
      data.append('location', this.state.location);
      data.append('description', this.state.description);
      data.append('author', this.state.id);
  
  
      const registerCall = this.props.addShrub(data);
  
      registerCall.then((data) => {
        
          if(data.status.message === "success"){
            
          } else {
            console.log(data, ' this should have an error message? How could you display that on the screen')
          }
      })
    }
  
   render(){
 
      return(
         <PostForm>
            <form onSubmit={this.handleSubmit}>
              Shrub Details: <br/>
              Location:
              <input placeholder='Where is it?' type='text' name='location' onChange={this.handleChange}/>
              <br/>
              description: <input type='text' name='description'onChange={this.handleChange}/>
              <br/>
              Image:
              <input name='image' type='file'onChange={this.handleChange}/>
               <br/>
              <button type='submit'>Post</button>
            </form>
         </PostForm>
      )
   }

}
export default Post
