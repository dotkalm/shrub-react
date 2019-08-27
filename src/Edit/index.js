import React, { Component } from 'react'
import {EditButton} from './style'
class EditShrub extends Component {
   state = {
      shrub: ''
   }
   
   handleSubmit = async (e) => {
      e.preventDefault();
      this.props.edit(this.props.shrub)
      
   }
   
   render(){

      return(
        <EditButton  
	    color={`rgb(${this.props.shrub.average_red},${this.props.shrub.average_green},${this.props.shrub.average_blue})`}>
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
