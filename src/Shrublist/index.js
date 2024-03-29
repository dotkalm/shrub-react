import React from 'react';
import {
   ShrubRow,
   CustomColor,
   SpanPadding
} from './style'
import EditShrub from '../Edit/index.js'

const Shrubs = (props) => {
	let total = {
		width: 0,
		height: 0
	};
	for (let i=0; i<props.shrubs.length; i++){
		total['width'] += (props.shrubs[i]['width'])
	}
	props.shrubs.sort((a, b) => (b.id > a.id) ? 1 : -1)   
	const shrubList = props.shrubs.map((shrub,i) => {
      return (
         
         <SpanPadding
	 key={`${shrub.image.replace('.jpg','')}`} 
	 height={`${(shrub.height)}`}
	 width={`${shrub.width}`}
	 color={`rgb(${shrub.average_red},
	 ${shrub.average_green},
	 ${shrub.average_blue})`}>
            <CustomColor
	    key={`${shrub.image.replace('.jpg','')}`}
	    width={`${(shrub.width)}`}
	    color={`rgb(${255-shrub.average_red},${255-shrub.average_green},${255-shrub.average_blue})`}>

               <img src = {process.env.REACT_APP_BACKEND_URL + '/shrub_pics/' + shrub.image} alt={shrub.description}/>
               {/* uploaded by the {shrub.author.username} */}
               <p>{shrub.detect_shrub ? 'nice shrub' : 'not sure if this is a shrub'}</p>
		{(props.user === shrub.author.id) ? <EditShrub shrub={shrub} edit={props.showModal}/>   : null} 
            </CustomColor>
         </SpanPadding>
      )
   })
   return(
      <ShrubRow total_width={total['width']}>
         {shrubList}
      </ShrubRow>
   )
}

export default Shrubs
