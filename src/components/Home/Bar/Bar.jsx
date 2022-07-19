import React from "react";
import "../../../css/Home/Bar/Bar.css";

const Bar = ({
	width,
	height,
	value,
	firstState,
	secondState,
	thirdState,
	fourthState,
	sortedState,
	style
}) => {
	let classNames = "Bar";
	const factor = 0.3;
	if (sortedState) classNames += " sortedState";
	if (fourthState) classNames += " state_d";
	else if (thirdState) classNames += " state_c";
	else if (secondState) classNames += " state_b";
	else if (firstState) classNames += " state_a";

	let currentBarStyling = { ...style, width: `${width}%`, height: `${height}%` };
	if (firstState || secondState || thirdState || fourthState) {
		currentBarStyling["marginRight"] = `${factor * width}%`;
		currentBarStyling["marginLeft"] = `${factor * width}%`;
	}

	return (
		<div style={currentBarStyling} className={classNames}>
			<span className="InnerBarValue">{value}</span>
		</div>
	);
};

export default Bar;
