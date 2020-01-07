import React, { Component } from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			username: ''
		};
	}

	setUsername = event => {
		this.setState(
			{
				username: event.target.value
			},
			() => {
				console.log(this.state.username);
			}
		);
	};

	validateUsername = () => {
		if (this.state.username.length < 3) {
			return 'err-msg';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="form-validate">
				<input placeholder="Enter username" onChange={this.setUsername}></input>
				<span className={`err-box ${this.validateUsername()}`}>
					Enter atleast 3 characters
				</span>
			</div>
		);
	}
}
