import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Home/HomeNavbar.css";
export default class Menu extends Component {
	state = { activeItem: "home", chosenRandomizer: "inOrderRandomize" };
	handleItemClick = (name) => {
		const newState = { activeItem: name };
		this.setState(newState);
	};
	handleRandomizerChange = (e) => {
		this.setState({
			chosenRandomizer: e.target.value
		});
		// console.dir(this.state.chosenRandomizer);
	};
	render() {
		return (
			<div className="massive ui menu">
				<Link className="item" to="/">
					<div className="header">Sorting, Visualized.</div>
				</Link>
				<Link className="item" to="/menu">
					<span>Visualizer</span>
				</Link>

				<Link className="item" to="/explainer">
					<span>Explainer</span>
				</Link>
				<Link className="item" to="/about">
					<span>About</span>
				</Link>
				<div id="home-right-menu-alg" className="right menu">
					<div
						className="pointerOnHover item"
						onClick={
							this.state.chosenRandomizer === "inOrderRandomize"
								? this.props.onGenerateInOrderRandomArray
								: this.props.onGenerateRandomArray
						}>
						<span>Randomize!</span>
					</div>
					<div className="pointerOnHover item">
						<select
							className="myNavbarSelect pointerOnHover"
							onChange={this.handleRandomizerChange}
							defaultValue="inOrderRandomize">
							<option value="inOrderRandomize">Bounded Randomizer</option>
							<option value="randomRandomize">Random Randomizer</option>
						</select>
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
