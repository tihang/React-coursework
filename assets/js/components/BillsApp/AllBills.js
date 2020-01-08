import React, { Component } from 'react';

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	showAllBills = () => {
		return this.props.currentBills.map((bill, i) => {
			return (
				<li className="bill" key={i}>
					<div className="company">
						<div className="logo">
							<img src="/img/bills-app/netflix-logo.jfif"></img>
						</div>
						<div className="title">{bill.business_name}</div>
					</div>
					<div className="price">${bill.price}</div>
				</li>
			);
		});
	};

	render() {
		return (
			<section id="all-bills">
				<div className="container">
					<div className="total-bills">
						<div className="bills-text">TOTAL: </div>
						<div className="bills-number">$800</div>
					</div>

					<ul className="bills-list">{this.showAllBills()}</ul>
				</div>
			</section>
		);
	}
}
