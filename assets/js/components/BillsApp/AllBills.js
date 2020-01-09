import React, { Component } from 'react';

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		if (this.props.currentBills.length > 0) {
			return this.props.currentBills.map((bill, i) => {
				return (
					<li className="bill" key={i}>
						<div className="company">
							<div className="logo">
								<img src="https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/5-512.png"></img>
							</div>
							<div className="title">{bill.business_name}</div>
						</div>
						<div className="price">${bill.price}</div>
					</li>
				);
			});
		} else {
			return (
				<li className="bill">
					<div className="company">
						<div className="title">Currently no bills</div>
					</div>
					<div className="price">--</div>
				</li>
			);
		}
	};

	// billsTotalAmount = () => {
	// 	if (this.props.currentBills > 0) {
	// 		let total = 0;
	// 		this.props.currentBills.forEach(bill => {
	// 			return (total += bill.price);
	// 		});
	// 	} else {
	// 		return 0;
	// 	}
	// }

	render() {
		return (
			<section id="all-bills">
				<div className="container">
					<div className="total-bills">
						<div className="bills-text">TOTAL: </div>
						<div className="bills-number">{this.props.totalAmount}</div>
					</div>

					<ul className="bills-list">{this.showAllBills()}</ul>
				</div>
			</section>
		);
	}
}
