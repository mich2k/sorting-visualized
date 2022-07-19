import React, { Component } from "react";
import "../../../css/Home/SortVisualizer/SortVisualizer.css";
import SortChart from "../SortChart/SortChart";
import VisualizerToolBar from "../VisualizerToolBar/VisualizerToolBar";
import ColorKey from "../LegendRow";
class SortVisualizer extends Component {
	state = {
		stepHistory: [],
		history: -1,
		srcArray: [],
		array: [],
		firstSet: [],
		secondSet: [],
		thirdSet: [],
		fourthSet: [],
		sortedSet: [],
		timeIdArr: [],
		sortingSpeed: 1
	};

	componentDidUpdate(pastProps) {
		if (pastProps.array !== this.props.array) {
			this.restore(this.props.array);
		}
		if (pastProps.stepHistory !== this.props.stepHistory) {
			this.restoreTimeIdArr();
			this.setState({ stepHistory: this.props.stepHistory });
		}
	}

	restore = (array) => {
		this.setState({
			array,
			stepHistory: [],
			history: -1,
			firstSet: [],
			secondSet: [],
			thirdSet: [],
			fourthSet: [],
			sortedSet: [],
			srcArray: [...array]
		});
	};

	restoreTimeIdArr = () => {
		this.state.timeIdArr.forEach((timeoutId) => clearTimeout(timeoutId));
		this.setState({ timeIdArr: [] });
	};

	updateVisualization = (currVisualization) => {
		this.setState({
			array: currVisualization.array,
			firstSet: currVisualization.firstSet,
			secondSet: currVisualization.secondSet,
			thirdSet: currVisualization.thirdSet,
			fourthSet: currVisualization.fourthSet,
			sortedSet: currVisualization.sortedSet,
			isOver: this.state.sortedSet.length + 1 == this.state.array.length
		});
	};

	run = (stepHistory) => {
		const timeIdArr = [];

		stepHistory.forEach((item, i) => {
			let timeoutId = setTimeout(
				(item) => {
					this.setState(
						(prevState) => ({
							history: prevState.history + 1
						}),
						this.updateVisualization(item)
					);
				},
				i * (250 / this.state.sortingSpeed),
				item
			);

			timeIdArr.push(timeoutId);
		});

		let timeoutId = setTimeout(
			this.restoreTimeIdArr,
			stepHistory.length * (250 / this.state.sortingSpeed)
		);
		timeIdArr.push(timeoutId);

		this.setState({ timeIdArr });
		// console.log(this.state.isOver);
	};

	pause = () => {
		this.restoreTimeIdArr();
	};

	keepPlaying = () => {
		const stepHistory = this.state.stepHistory.slice(this.state.history);
		this.run(stepHistory);
	};

	goForward = () => {
		const stepHistory = this.state.stepHistory;
		const current = this.state.history;
		if (current < stepHistory.length - 1) {
			const item = stepHistory[current + 1];
			this.setState({ history: current + 1 }, this.updateVisualization(item));
		}
	};

	goBackward = () => {
		const stepHistory = this.state.stepHistory;
		const current = this.state.history;
		if (current > 0) {
			const item = stepHistory[current - 1];
			this.setState({ history: current - 1 }, this.updateVisualization(item));
		}
	};

	repeat = () => {
		this.restoreTimeIdArr();
		this.setState((prevState) => ({
			array: [...prevState.srcArray],
			history: -1,
			compared: [],
			sortedState: []
		}));
		this.run(this.state.stepHistory);
	};

	changePlaySpeed = (e) => {
		const playing = this.state.timeIdArr.length > 0;
		this.pause();
		const sortingSpeed = Number(e.target.value);
		this.setState({ sortingSpeed }, () => {
			if (playing) this.keepPlaying();
		});
	};

	render() {
		return (
			<div className="SortVisualizer">
				<SortChart
					numbers={this.state.array}
					maxNum={Math.max(...this.state.array)}
					firstSet={this.state.firstSet}
					secondSet={this.state.secondSet}
					thirdSet={this.state.thirdSet}
					fourthSet={this.state.fourthSet}
					sortedSet={this.state.sortedSet}
				/>

				<VisualizerToolBar
					onPlay={
						this.state.history === -1
							? this.run.bind(this, this.state.stepHistory)
							: this.keepPlaying.bind(this)
					}
					onPause={this.pause.bind(this)}
					onForward={this.goForward.bind(this)}
					onBackward={this.goBackward.bind(this)}
					onRepeat={this.repeat.bind(this)}
					onAdjustSpeed={this.changePlaySpeed}
					playing={this.state.timeIdArr.length > 0}
				/>

				<ColorKey {...this.props.colorKey} algorithm={this.props.algorithm} />
			</div>
		);
	}
}

export default SortVisualizer;
