import React from 'react';
import {
   ShrubRow,
   CustomColor
} from './style'

const Shrubs = (props) => {
   console.log(props)
   const shrubList = props.shrubs.map((shrub,i) => {
      
      return (

         <CustomColor key={`${shrub.image.replace('.jpg','')}`} color={`rgb(${255-shrub.average_red},${255-shrub.average_green},${255-shrub.average_blue})`}>
            
            <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
            {/* uploaded by the {shrub.author.username} */}
            {shrub.detect_shrub ? 'nice shrub' : 'not sure if this is a shrub'}
         </CustomColor>
      )
   })
   return(
      <ShrubRow>
         {shrubList}
      </ShrubRow>
   )
}

export default Shrubs