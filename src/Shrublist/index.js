import React from 'react';

const Shrubs = (props) => {
   
   const shrubList = props.shrubs.map((shrub,i) => {

      return (
         <span key={shrub.id}>
            
            <img src = {'http://localhost:8000/shrub_pics/' + shrub.image} alt={shrub.description}/>
         </span>
      )
   })
   return(
      <div>
         {shrubList}
      </div>
   )
}

export default Shrubs