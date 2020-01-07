import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter.js';
import Immutable from './components/Immutable/Immutable.js';
import Form from './components/Counter/Form';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={`container`}>
				{/* <Counter status="manual" /> */}
				<Immutable></Immutable>
				<Form></Form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
