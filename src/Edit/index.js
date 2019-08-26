import React, { Component } from 'react'
import {EditButton} from './style'
class EditShrub extends Component {
   state = {
      shrub: ''
   }
   
   handleSubmit = async (e) => {
      e.preventDefault();
      this.props.edit(this.props.shrub.id)
      
   }
   
   render(){

      return(
        <EditButton> 
         <form onSubmit={this.handleSubmit}>
            <button>
               Edit
            </button>
         </form>
	</EditButton>      
      )
   }
}

export default EditShrub 
