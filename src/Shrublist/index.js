import React from 'react';
import {
   ShrubRow,
   CustomColor,
   SpanPadding
} from './style'
import Delete from '../DeletePhoto'

const Shrubs = (props) => {
   
   const shrubList = props.shrubs.map((shrub,i) => {
      
      return (
         
         <SpanPadding key={`${shrub.image.replace('.jpg','')}`} color={`rgb(${shrub.average_red},${shrub.average_green},${shrub.average_blue})`}>
            <CustomColor key={`${shrub.image.replace('.jpg','')}`} color={`rgb(${255-shrub.average_red},${255-shrub.average_green},${255-shrub.average_blue})`}>
               
               <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
               {/* uploaded by the {shrub.author.username} */}
               <p>{shrub.detect_shrub ? 'nice shrub' : 'not sure if this is a shrub'}</p>
               <Delete shrub={shrub} delete={props.handleDelete}/>
               
            </CustomColor>
         </SpanPadding>
      )
   })
   return(
      <ShrubRow>
         {shrubList}
      </ShrubRow>
   )
}

export default Shrubs