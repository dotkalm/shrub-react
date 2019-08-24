import React, { Component } from 'react'

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
         
         <form onSubmit={this.handleSubmit}>
            <button>
               DELETE
            </button>
         </form>
      )
   }
}

export default Delete 