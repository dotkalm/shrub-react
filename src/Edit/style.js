import styled from 'styled-components'

export const EditForm = styled.div`
	position: fixed;
	display: grid;
	#grid-template-columns: [first] 1rem [line2] 1rem [line3] auto [col4-start] 2rem [five] 1rem [end]; 
	#grid-template-rows: [row1-start] 2rem [row1-end row2 start] 4rem [row2-end] 4rem [end] ;
	background-color: ${props => props.color ? props.color : "teal"};
	width: 60%;
	padding: 2rem;
	opacity: .95;

	.top {
		grid-column-start: col-start -1;
		text-align: right;
		width:2rem;
		grid-row-start: row-start 0;
		transform: translate3d(14rem,-31px,0px);
		background-color: pink;
	};
	.topTwo{
		width: 40%;
		grid-column-start: col-start 1;
		grid-row-start: row-start 3;
		background-color: blue;
	}
	.submitChanges{
		grid-row-start: row-start 4;
		grid-column-start: col-start 0;
		background-color: gray;
		margin-top: 1rem;
	}
	form{
		grid-row-start: row-start 2;
		grid-column-start: col-start 0;
		
	}
	 .clearfix {
	 display: inline-block;}
	 .clearfix:after {
	  visibility: hidden;
	  font-size: 0;
	  content: " ";
	  clear: both;
	  height: 0;
	};
}
`

export const DeleteButton = styled.div`
	  background-color: ${props => props.color ? props.color : "pink"};
	  border: 1px solid black;
	  grid-row-start: row-start 4;
	  grid-column-start: col-start 3;
	  height: 1rem;
	margin-top: 1rem;
	  width: 4rem
	  padding: .2rem;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
        button,
	input,
	optgroup,
	select,
	textarea {
	  font-family: inherit; /* 1 */
	  font-size: 100%; /* 1 */
	  line-height: 1.15; /* 1 */
	  margin: 0; /* 2 */
}
`

export const EditButton = styled.div`
	  background-color: ${props => props.color ? props.color : "pink"};
	  border: none;
	  color: white;
	  padding: 1.5 rem;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
        button,
	input,
	optgroup,
	select,
	textarea {
	  font-family: inherit; /* 1 */
	  font-size: 100%; /* 1 */
	  line-height: 1.15; /* 1 */
	  margin: 0; /* 2 */
	}
`

