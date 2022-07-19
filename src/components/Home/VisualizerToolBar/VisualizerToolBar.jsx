import React from "react";
import "../../../css/Home/VisualizerToolBar/VisualizerToolBar.css";
const VisualizerToolBar = ({
	onPlay,
	onPause,
	onBackward,
	onForward,
	onRepeat,
	onAdjustSpeed,
	playing
}) => {
	return (
		<div className="VisualizerToolBar">
			<button className="ui icon button" onClick={onRepeat}>
				<i className="large redo icon"></i>
			</button>
			<button className="ui icon button" onClick={onBackward}>
				<i className="large angle left icon"></i>
			</button>{" "}
			<button className="ui icon blue button" onClick={playing ? onPause : onPlay}>
				<i className={playing ? "large pause icon" : "large play icon"}></i>
			</button>{" "}
			<button className="ui icon button" onClick={onForward}>
				<i className="large angle right icon"></i>
			</button>
			<div id="speed-border-wrapper">
				<div id="speed-select-wrapper">
					<select
						className="ui compact selection dropdown"
						id="speed-select"
						defaultValue="1"
						onChange={onAdjustSpeed}>
						<option value="0.25">0.25x</option>
						<option value="0.5">0.5x</option>
						<option value="1">1x</option>
						<option value="2">2x</option>
						<option value="4">4x</option>
						<option value="10">10x</option>
						<option value="25">25x</option>
						<option value="50">50x</option>
						<option value="100">100x</option>
						<option value="200">200x</option>
						<option value="250">250x</option>
					</select>
				</div>
				<div id="speed-select-label-wrapper" style={{ marginTop: "10px" }}>
					<label htmlFor="speed-select-wrapper">Speed Selector</label>
				</div>
			</div>
		</div>
	);
};

export default VisualizerToolBar;
