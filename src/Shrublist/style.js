import styled from 'styled-components'

export const ShrubRow = styled.div`

   background-color: ${props => props.color ? props.color : "white"};
   @media (max-width: 650px){
   	width:100%;
	margin: auto;
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
   display: block
   @media (max-width: 550px){
      marign:auto;
      padding:1rem 1rem .8rem 1rem;
      img{
	width: 100%
	}
	  font-size: 16px;
   };
   img{
	@media(max-width: 550px){
	width: 100%
	}
   }
   p{
      display: flex
   }
`

export const SpanPadding = styled.div`

   background-color: ${props => props.color ? props.color : "green"};
   	@media (max-width: 1350px){
   	}
  	@media (max-width: 575px){
	width: 90%;
	margin: auto;
	padding: .5rem;
	}
`
