import React from 'react'
import Login from './index'

const Hello = (props,data) => {

   return(
      <div>
         OF COURSE 
         {console.log(props,data, '<---- props and data in hello')}
      </div>
   )
}
export default Hello