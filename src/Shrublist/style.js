import styled from 'styled-components'
export const ShrubRow = styled.div`

   background-color: ${props => props.color ? props.color : "green"};
   display: flex;
   flex-wrap: nowrap;
   overflow-x: auto;
   @media (max-width: 650px){
      background-color: yellow
   }
   .card {
      display: inline-block;
    }

   
 }

`