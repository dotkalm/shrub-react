import styled from 'styled-components'

export const Hello = styled.div`
   background-color: ${props => props.color ? props.color : "black"};
   border-bottom: 1px solid black;
   width: 100%;
   height: 2rem;
   form{
   display: inline;
   }
`
