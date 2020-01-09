import React, { Component } from 'react';

export default class AddBill extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			price: ''
		};
	}

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	handleSubmit = () => {
		event.preventDefault();
		this.props.saveBill(this.state);
		this.setState({
			business_name: '',
			price: ''
		});
	};

	render() {
		return (
			<section
				id="add-bill"
				className={`${this.props.addBillOpen == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input
								onChange={this.inputChange}
								value={this.state.business_name}
								type="text"
								name="business_name"
								id="business_name"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								onChange={this.inputChange}
								value={this.state.price}
								type="text"
								name="price"
								id="price"
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}
