import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Home/HomeNavbar.css";
export default class Menu extends Component {
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
					<div className="pointerOnHover item" onClick={this.props.onGenerateRandomArray}>
						<span>Randomize</span>
					</div>
					<div className="pointerOnHover item" onClick={this.props.onGenerateInOrderRandomArray}>
						<p style={{ textAlign: "center" }}>
							Bounded Randomize <br></br>{" "}
							<span style={{ fontSize: "1.2rem" }}>(1 to array size)</span>
						</p>
					</div>
					<div className="pointerOnHover item">
						<select
							className="myNavbarSelect pointerOnHover"
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
					<div className="pointerOnHover item">
						<select
							className="myNavbarSelect pointerOnHover"
							onChange={this.props.onArraySizeChange}
							defaultValue="5">
							<option value="3">3</option>
							<option value="5">5</option>
							<option value="20">20</option>
							<option value="50">50</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="300">300</option>
							<option value="400">400</option>
							<option value="500">500</option>
						</select>
					</div>
					<div className="item">
						<span>
							<i className="angle double left icon"></i>
							<b>Tweaker</b>
						</span>
					</div>
				</div>
			</div>
		);
	}
}
