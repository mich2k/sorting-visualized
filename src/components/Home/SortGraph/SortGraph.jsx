import React from "react";
import "../../../css/Home/SortGraph/SortGraph.css";

import Bar from "../Bar/Bar";

const getListOfBars = (
	numbers,
	maxNum,
	firstGroup,
	secondGroup,
	thirdGroup,
	fourthGroup,
	sortedSet
) => {
	return numbers.map((num, i) => {
		let width = 100 / numbers.length;
		let height = (num / maxNum) * 100;
		let firstState = firstGroup.includes(i);
		let secondState = secondGroup.includes(i);
		let thirdState = thirdGroup.includes(i);
		let fourthState = fourthGroup.includes(i);
		let sortedState = sortedSet.includes(i);
		console.log(firstGroup, secondGroup, thirdGroup, fourthGroup);

		let margin = i === numbers.length ? "0" : width > 3 ? "0.5rem" : "0.125rem";
		return (
			<Bar
				key={`${i}_${num}`}
				width={width}
				height={height}
				value={width > 4 ? num : null}
				firstState={firstState}
				secondState={secondState}
				thirdState={thirdState}
				fourthState={fourthState}
				sortedState={sortedState}
				style={{ marginRight: `${margin}` }}
			/>
		);
	});
};

const SortGraph = ({
	numbers,
	maxNum,
	firstGroup,
	secondGroup,
	thirdGroup,
	fourthGroup,
	sortedSet
}) => {
	return (
		<div className="SortGraph">
			{getListOfBars(numbers, maxNum, firstGroup, secondGroup, thirdGroup, fourthGroup, sortedSet)}
		</div>
	);
};

export default SortGraph;
