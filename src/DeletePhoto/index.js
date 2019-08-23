import React, { Component } from 'react'

class Delete extends Component {
   state = {
      shrub: ''
   }
   handleSubmit = async (e) => {
      e.preventDefault();
      console.log('++++++++++ handle submit delete photo index js ++++++++++')
      console.log(e.target, this.props.shrub)
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