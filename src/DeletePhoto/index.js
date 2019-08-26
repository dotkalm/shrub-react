import React, { Component } from 'react'
import {DeleteButton} from './style'

class Delete extends Component {
   state = {
      shrub: ''
   }
   
   handleSubmit = async (e) => {
      e.preventDefault();
      console.log(this.props.shrub)
      this.props.delete(this.props.shrub.id,this.props.shrub.author.id)
      
   }
   
   render(){

      return(
	<DeleteButton>         
         <form onSubmit={this.handleSubmit}>
            <button>
               DELETE
            </button>
         </form>
	</DeleteButton>
      )
   }
}

export default Delete 
