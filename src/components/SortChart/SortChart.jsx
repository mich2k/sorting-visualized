import React from "react";
import "./SortChart.css";

import Bar from "../Bar";

const getListOfBars = (numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet) => {
	return numbers.map((num, i) => {
		let width = 100 / numbers.length;
		let height = (num / maxNum) * 100;
		let firstState = firstSet.includes(i);
		let secondState = secondSet.includes(i);
		let thirdState = thirdSet.includes(i);
		let fourthState = fourthSet.includes(i);
		let sortedState = sortedSet.includes(i);

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

const SortChart = ({ numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet }) => {
	return (
		<div className="SortChart">
			{getListOfBars(numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet)}
		</div>
	);
};

export default SortChart;
