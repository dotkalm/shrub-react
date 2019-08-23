import React, { Component } from 'react'
import GreenTest from './check'
import {
   CheckStyle,
   
} from './style'

class CheckGreen extends Component {
   state = {
      shrubs: [],
      username: this.props.userName,
      logged: false,
      userId: this.props.userId
   }
   
   async componentDidMount(){
      const allShrubs = await this.getValue();
      
      this.setState({
         shrubs: [...allShrubs]
      })
      
   }
   async componentWillUnmount(){
      
      
      this.setState({
         shrubs: []
      })
      
   }
   
   getValue = async () => {
      try {
         const responseGetShrubs = await fetch('http://localhost:8000/api/v1/', {
            credentials: 'include',
            method: 'GET'
         })
         if(responseGetShrubs.status !== 200){
            throw Error('404 from server');
         }
         const shrubResponse = await responseGetShrubs.json()
         return shrubResponse.data
      } catch(err){
         console.log(err, '<- get shrub error')
         return err
      }

   }
   render(){
      
      
      return(
         <div>
            <CheckStyle>
               
               hi
               
                  <GreenTest shrubs={this.state.shrubs}/>
               
               
            </CheckStyle>
         </div>
      )
   }

}
export default CheckGreen