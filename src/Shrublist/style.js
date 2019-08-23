import styled from 'styled-components'
export const ShrubRow = styled.div`

   background-color: ${props => props.color ? props.color : "green"};
   display: flex;
   flex-wrap: nowrap;
   overflow-x: auto;
   @media (max-width: 650px){
      
   }
   .card {
      display: inline-block;
    }
   .pixelColor {
      background-color: background-color: ${props => props.color ? props.color : "rgb(255,0,0)"};
   }
   
 }

`

export const CustomColor = styled.div`
   background-color: ${props => props.color ? props.color : "green"};
   padding: 2rem;
`