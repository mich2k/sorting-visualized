import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BaseNavBar extends Component {
	state = { activeItem: "home" };
	handleItemClick = (name) => {
		const newState = { activeItem: name };
		this.setState(newState);
	};

	render() {
		return (
			<div className="massive ui menu">
				<Link to="/">
					<div className="header item">Sorting, Visualized.</div>
				</Link>
				<Link to="/menu">
					<span className="item">Visualizer</span>
				</Link>

				<Link to="/explainer">
					<span className="item">Explainer</span>
				</Link>
				<Link to="/about">
					<span className="item">About</span>
				</Link>
			</div>
		);
	}
}
