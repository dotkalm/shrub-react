import React from 'react';
import {
   ShrubRow
   
} from './style'

const Shrubs = (props) => {
   console.log(props)
   const shrubList = props.shrubs.map((shrub,i) => {

      return (

         <span key={shrub.id} className='card'>
            
            <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
            {/* uploaded by the {shrub.author.username} */}
            {shrub.detect_shrub ? 'nice shrub' : 'not sure if this is a shrub'}
         </span>
      )
   })
   return(
      <ShrubRow>
         {shrubList}
      </ShrubRow>
   )
}

export default Shrubs