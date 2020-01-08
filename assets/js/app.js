import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Counter from './components/Counter/Counter';
// import Immutable from './components/Immutable/Immutable';
// import Form from './components/Counter/Form';
import BillsApp from './components/BillsApp/BillsApp';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={`container`}>
				{/* <Counter status="manual" /> */
				/* <Immutable></Immutable>
					<Form></Form> */}
				<BillsApp></BillsApp>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
