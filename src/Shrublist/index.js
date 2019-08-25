import React from 'react';
import {
   ShrubRow,
   CustomColor,
   SpanPadding
} from './style'
import Delete from '../DeletePhoto'
import EditShrub from '../Edit/index.js'

const Shrubs = (props) => {
   
   const shrubList = props.shrubs.map((shrxub,i) => {
    	   console.log(props,'<---PROPS in shrublist index')	
	   const shrub = props.shrubs[i]
	   console.log(shrub)
      return (
         
         <SpanPadding
	 key={`${shrub.image.replace('.jpg','')}`} 
	 width={`${(shrub.width)}x`}
	 color={`rgb(${shrub.average_red},${shrub.average_green},${shrub.average_blue})`}>
            <CustomColor
	    key={`${shrub.image.replace('.jpg','')}`}
	    width={`${(shrub.width)}px`}
	    color={`rgb(${255-shrub.average_red},${255-shrub.average_green},${255-shrub.average_blue})`}>

               <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
               {/* uploaded by the {shrub.author.username} */}
               <p>{shrub.detect_shrub ? 'nice shrub' : 'not sure if this is a shrub'}</p>
               <Delete shrub={shrub} delete={props.handleDelete}/>
		<EditShrub shrub={shrub} edit={props.showModal}/>                
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
