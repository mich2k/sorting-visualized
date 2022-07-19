import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MenuExampleInvertedSegment extends Component {
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
					<span className="item">Home</span>
				</Link>

				<Link to="/explainer">
					<span className="item">Explainer</span>
				</Link>
				<Link to="/about">
					<span className="item">About</span>
				</Link>
				<div id="home-right-menu-alg" className="right menu">
					<div className="item">
						<select
							style={{
								outline: "none",
								border: "none",
								backgroundColor: "transparent"
							}}
							onChange={this.props.onAlgorithmChange}
							defaultValue="Bubble">
							<option value="Bubble">Bubble Sort</option>
							<option value="Merge">Merge Sort</option>
							<option value="Quick">Quick Sort</option>
							<option value="Heap">Heap Sort</option>
							<option value="Shell">Shell Sort</option>
							<option value="Selection">Selection Sort</option>
							<option value="Insertion">Insertion Sort</option>
						</select>
					</div>
					<div className="item">
						<span>
							<i className="angle left icon"></i>
							<b>Discover the logic.</b>
						</span>
					</div>
				</div>
			</div>
		);
	}
}
