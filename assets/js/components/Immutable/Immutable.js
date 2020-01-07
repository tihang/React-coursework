import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Joe', 'Mary', 'Lisa', 'Adam'],
			teachers: ['Sam', 'Suzan', 'Rai'],
			both: [],
			user: {
				name: 'Joe',
				age: 23,
				location: 'NYC',
				grades: {
					math: 'A',
					science: 'B',
					gym: 'C'
				}
			}
		};
	}

	clickedBtn = () => {
		// const newGrade = {
		// 	...this.state.user.grades,
		// 	gym: 'A'
		// };

		// const newNamesArr = {
		// 	// names: [...this.state.names, 'Ramsey']
		// 	// names: this.state.names.filter(name => name !== 'Mary')
		// 	both: [...this.state.names, ...this.state.teachers]
		// };

		// const newUser = Object.assign({}, this.state.user, {
		// 	name: 'Jane',
		// 	grades: newGrade
		// });

		const newState = update(this.state, {
			background: { $set: 'green' },
			names: { $push: ['Sachin'] },
			user: {
				name: { $set: 'Rajan' }
			}
		});

		console.log(this.state);
		this.setState(newState, () => {
			console.log(this.state);
		});
		console.log('clicked');
	};

	changeToActive = () => {
		if (this.state.both[6] == 'Rai') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="immutable-comp">
				<div className={`box ${this.changeToActive()}`}></div>
				<div className="button" onClick={this.clickedBtn}>
					Press me
				</div>
			</div>
		);
	}
}
