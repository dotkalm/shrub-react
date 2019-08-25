import React, { Component } from 'react'

class EditShrub extends Component {
   state = {
      shrub: ''
   }
   
   handleSubmit = async (e) => {
      e.preventDefault();
      console.log(this.props)
      this.props.edit(this.props.shrub.id)
      
   }
   
   render(){

      return(
         
         <form onSubmit={this.handleSubmit}>
            <button>
               Edit
            </button>
         </form>
      )
   }
}

export default EditShrub 
