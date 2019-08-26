import React, { Component } from 'react'
import {
	 EditForm,
	 DeleteButton } from './style'

class EditModal extends Component {
	state = {
		shrubbery: this.props.shrubs
	}
	handleDelete = async (e) => {
		e.preventDefault();
		this.props.delete(this.props.shrub.id)
	}

	render(){

		return(
			<EditForm>
				Edit Shrub
			<form>		
				Edit Location
				<input type='text' onChange={this.props.handleFormChange}  value={this.props.shrub.location}/>
			<br/>
				Edit Description:
				<input type='text' onChange={this.props.handleFormChange}  value={this.props.shrub.description}/>
			</form>
				<DeleteButton>
					<form onSubmit={this.handleDelete}>
						<button>
							Delete
						</button>
					</form>
				</DeleteButton>
			</EditForm>
		)}
}
export default EditModal
