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
	handleEdit = async (e) => {
		e.preventDefault();
		this.props.closeAndEdit(this.props.shrub.id)	
	}

	render(){

		const shrub = this.props.shrub
		return(

			<EditForm color={`rgb(${shrub.average_red}, ${shrub.average_green},${shrub.average_blue})`}> 
			<div className='top'> <button onClick={this.props.close}> x </button> </div>
			<form>		
				Edit Location
				<input type='text' name='location'  onChange={this.props.handleFormChange}  value={this.props.shrub.location}/>
			<br/>
				Edit Description:
				<input type='text' name='description' onChange={this.props.handleFormChange}  value={this.props.shrub.description}/>
			</form>
			<form className='submitChanges' onSubmit={this.handleEdit}>
				<button>
					Submit Changes
				</button>
			</form>
			<DeleteButton color={`rgb(${255-shrub.average_red}, ${255-shrub.average_green},${255-shrub.average_blue})`}>

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
