import React, { Component } from 'react';
import Button from './Button.js';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			status: 'manual',
			counter: 0
		};
	}

	componentWillMount() {
		console.log('component will mount started');
	}

	componentDidMount() {
		if (this.props.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterAutorun();
				}
			);
		}
	}

	doMinus = () => {
		this.setState({
			counter: this.state.counter - 1
		});
	};

	doPlus = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	counterAutorun = () => {
		setInterval(() => {
			this.setState({
				counter: this.state.counter + 1
			});
		}, 1000);
	};

	render() {
		const styleCounterComp = {
			maxWidth: '400px',
			width: '100%',
			margin: '0 auto'
		};

		const styleNumber = {
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center'
		};

		const styleButton = {
			display: this.props.status == 'auto' ? 'none' : 'flex'
		};
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="number" style={styleNumber}>
					{this.state.counter}
				</div>
				<div className="buttons" style={styleButton}>
					<Button
						trigger={this.doMinus}
						backgroundColor="white"
						hoverColor="red"
						action="minus"
					>
						-
					</Button>
					<Button
						trigger={this.doPlus}
						backgroundColor="white"
						hoverColor="green"
						action="plus"
					>
						+
					</Button>
				</div>
			</div>
		);
	}
}
