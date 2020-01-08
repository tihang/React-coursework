import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';
import update from 'immutability-helper';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			allBills: []
		};
	}

	clickedAddBillButton = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
	};

	saveBill = bill => {
		const newBills = update(this.state.allBills, {
			$push: [bill]
		});
		this.setState({
			allBills: newBills,
			addBillOpen: false
		});
	};

	render() {
		return (
			<div id="bills-app">
				<Header />
				<AllBills currentBills={this.state.allBills} />
				<AddBill
					saveBill={this.saveBill}
					addBillOpen={this.state.addBillOpen}
				/>
				<div className="content-background"></div>
				<FloatingMenu clickedAddBillButton={this.clickedAddBillButton} />
			</div>
		);
	}
}
