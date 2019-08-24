import React, { Component } from 'react'

class Delete extends Component {
   state = {
      shrub: ''
   }
   
   handleSubmit = async (e) => {
      e.preventDefault();
      
      this.props.delete(this.props.shrub.id)
      
   }
   
   render(){

      return(
         
         <form onSubmit={this.handleSubmit}>
            <button>
               DELETE
            </button>
         </form>
      )
   }
}

export default Delete 