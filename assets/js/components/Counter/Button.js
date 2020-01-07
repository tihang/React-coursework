import React, { Component } from 'react';

export default class Button extends Component {
	constructor() {
		super();
		this.state = {
			hover: false
		};
	}

	toggleHOver = () => {
		return this.setState({
			hover: !this.state.hover
		});
	};

	render() {
		const styleButtons = {
			cursor: 'pointer',
			width: '50%',
			display: 'inline-block',
			border: '3px solid black',
			padding: '50px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center',
			transition: 'all .3s ease-in-out',
			background: this.state.hover
				? this.props.hoverColor
				: this.props.backgroundColor
		};
		return (
			<div
				className={`button ${this.props.action}`}
				style={styleButtons}
				onMouseEnter={this.toggleHOver}
				onMouseLeave={this.toggleHOver}
				onClick={this.props.trigger}
			>
				{this.props.children}
			</div>
		);
	}
}
