import React, { Component, useState } from 'react'
import {
   Play
   
} from './style'
let interval = 0
let filezname = 'shrub_0'
 const animate = setInterval(() =>{
   if(interval<297){
      if(interval<10){
         filezname = filezname + '00'+interval
      } else if(interval>10&&interval<100){
         filezname = filezname + '0' + interval
      } else {
         filezname = filezname + interval
      }
      filezname = `${filezname}_Layer ${297-interval}.jpg`

      interval ++
      console.log(filezname)
       filezname ='shrub_0'
   } else {
      clearInterval(animate)
   }
    
}, 200)
const hook = () => {
   
}


class Player extends Component {
   state = {
     username: '',
     email:'',
     password: '',
     userId:'',
     images: '',
     frame: ''
   }
   
      
   
   
   render(){
      
      

      return(
         <div>
            <Play color={"yellow"}>
               <img className='pic' src={process.env.REACT_APP_BACKEND_URL + '/shrub_files/' + filezname} alt='shrubs'/>
            </Play>
         </div>
      )
   }
}

export default Player






