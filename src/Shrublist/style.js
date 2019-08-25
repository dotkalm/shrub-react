import styled from 'styled-components'

export const ShrubRow = styled.div`

   background-color: ${props => props.color ? props.color : "green"};
   @media (max-width: 650px){
   }
   .card {
    }
   .pixelColor {
      background-color: background-color: ${props => props.color ? props.color : "rgb(255,0,0)"};
   }
   
 }

`

export const CustomColor = styled.div`
   background-color: ${props => props.color ? props.color : "green"};

   @media (max-width: 1350px){
      margin: auto;
      width: ${props => props.width ? props.width : 805};
   };
   img{
   	width: 40%;
   }
   p{
      display: flex
   }
`

export const SpanPadding = styled.div`

   background-color: ${props => props.color ? props.color : "green"};
   width: 100%
   @media (max-width: 1350px){
   	width: 100%
   }
`
