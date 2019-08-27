import React, { useState } from 'react'

import {
   Home
   
} from './style'

const PlayingVid = () =>{
   const [count, setCount] = useState(0);
   
   let filezname = 'shrub_0'
   if(count<297){
      if(count<10){
         filezname = filezname + '00'+ count
      } else if (count>=10&&count<100){
         filezname = filezname + '0' + count
      } else {
         filezname = filezname + count
      }
   } else {
      setCount(count - 297)
   }
//specific to video
   return(
      <Home >
        
      <img src={`${process.env.REACT_APP_BACKEND_URL}/shrub_files/${filezname}_Layer ${297-count}.jpg`} onClick={() => setCount(count + 1)} alt='shrubs'/>
      <img src={`${process.env.REACT_APP_BACKEND_URL}/shrub_files/${filezname}_Layer ${297-count}.jpg`} onClick={() => setCount(count + 1)} alt='shrubs'/>
      <img src={`${process.env.REACT_APP_BACKEND_URL}/shrub_files/${filezname}_Layer ${297-count}.jpg`} onClick={() => setCount(count + 1)} alt='shrubs'/>
      
      </Home>
   )

}
export default PlayingVid