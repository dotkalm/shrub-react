import React, { Component }from 'react'

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
        console.log(e.target.files[0])
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
  
      // console.log(data.entries(), ' this is data')
      // for (let pair of data.entries()){
         
      //   console.log(pair[0]  ,' , ', pair[1])
      // }
      // console.log(data)
      const registerCall = this.props.addShrub(data);
  
      registerCall.then((data) => {
        console.log(data)
         //  if(data.status.message === "Success"){
            
         //  } else {
         //    console.log(data, ' this should have an error message? How could you display that on the screen')
         //  }
      })
    }
  
   render(){
     console.log(this.state.id, 'this state id')
     console.log(this.props.id, 'user id')
     console.log(this.props, 'this . props')
      return(
         <div>
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
         </div>
      )
   }

}
export default Post