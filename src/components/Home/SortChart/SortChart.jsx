import React from "react";
import "../../../css/Home/SortChart/SortChart.css";

import Bar from "../Bar/Bar";

const fetchList = (numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet) => {
	return numbers.map((num, i) => {
		let width = 100 / numbers.length,
			height = (num / maxNum) * 100,
			firstState = firstSet.includes(i),
			secondState = secondSet.includes(i),
			thirdState = thirdSet.includes(i),
			fourthState = fourthSet.includes(i),
			sortedState = sortedSet.includes(i),
			margin;

		if (i === numbers.length) {
			margin = 0;
		} else {
			margin = width > 3 ? "0.5rem" : "0.125rem";
		}
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
			{fetchList(numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet)}
		</div>
	);
};

export default SortChart;
