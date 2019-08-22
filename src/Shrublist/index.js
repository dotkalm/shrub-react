import React from 'react';
import {
   ShrubRow
   
} from './style'

const Shrubs = (props) => {
   
   const shrubList = props.shrubs.map((shrub,i) => {

      return (
         <span key={shrub.id} className='card'>
            
            <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
            uploaded by the {shrub.author.username}
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