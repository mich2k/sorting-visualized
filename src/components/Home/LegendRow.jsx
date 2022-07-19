import React from "react";
import "../../css/Home/LegendRow/LegendRow.css";

const LegendRow = ({ firstSet, secondSet, thirdSet, fourthSet, algorithm }) => {
	const elemSorted =
		firstSet || secondSet || thirdSet || fourthSet ? (
			<div className="Legend_Item">
				<div className="Box sortedState"></div>
				<span>Sorted</span>
			</div>
		) : (
			<div className="Legend_Item">
				<div className="Box Unsorted"></div>
				<span>Not sorted</span>
			</div>
		);

	const elemFirstState = firstSet ? (
		<div className="Legend_Item">
			<div className="Box firstLabel"></div>
			<span>{firstSet}</span>
		</div>
	) : null;

	const elemSecondState = secondSet ? (
		<div className="Legend_Item">
			<div className="Box secondLabel"></div>
			<span>{secondSet}</span>
		</div>
	) : null;

	const elemThirdState = thirdSet ? (
		<div className="Legend_Item">
			<div className="Box thirdLabel"></div>
			<span>{thirdSet}</span>
		</div>
	) : null;

	const elemFourthState = fourthSet ? (
		<div className="Legend_Item">
			<div className="Box fourthLabel"></div>
			<span>{fourthSet}</span>
		</div>
	) : null;

	return (
		<div className="LegendRow">
			<span id="legend-header" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
				{algorithm} <br></br> Color Legend:
			</span>
			<br></br>
			<br></br>
			<span style={{ fontStyle: "italic" }}>{elemSorted}</span>
			<br></br>
			<span style={{ fontStyle: "italic" }} className="legend-item">
				{" "}
				{elemFirstState}
			</span>
			<br></br>
			<span style={{ fontStyle: "italic" }} className="legend-item">
				{" "}
				{elemSecondState}
			</span>
			<br></br>
			<span style={{ fontStyle: "italic" }} className="legend-item">
				{" "}
				{elemThirdState}
			</span>
			<span style={{ fontStyle: "italic" }} className="legend-item">
				{" "}
				{elemFourthState}
			</span>
		</div>
	);
};

export default LegendRow;
