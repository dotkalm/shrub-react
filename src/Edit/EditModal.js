import React from 'react'
import {EditForm} from './style'
const EditModal = (props) => {
	return(
		<EditForm>
			Edit Shrub
		<form>		
			<input type='text'/>
			Edit Description:
			<input type='text'/>
		</form>
		</EditForm>
	)
}
export default EditModal

