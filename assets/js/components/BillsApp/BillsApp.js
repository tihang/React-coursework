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
			allBills: [],
			totalAmount: 0
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
		const total = this.state.totalAmount + parseFloat(bill.price);
		this.setState(
			{
				allBills: newBills,
				addBillOpen: false,
				totalAmount: total
			},
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<div id="bills-app">
				<Header />
				<AllBills
					currentBills={this.state.allBills}
					totalAmount={this.state.totalAmount}
				/>
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
