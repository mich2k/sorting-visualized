import { newTrace, moveInHistoryRecord, createKey } from "./helpers";

const InsertionSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let i = 1; i < nums.length; i++) {
		let value = nums[i];
		let hole = i;

		moveInHistoryRecord(stepHistory, nums, [], [i]);
		while (hole > 0 && nums[hole - 1] > value) {
			moveInHistoryRecord(stepHistory, nums, [], [hole], [hole - 1]);
			nums[hole] = nums[hole - 1];
			hole -= 1;

			moveInHistoryRecord(stepHistory, nums, [], [], [hole, hole + 1]);
		}

		moveInHistoryRecord(stepHistory, nums, [], [], [], [hole]);
		nums[hole] = value;

		moveInHistoryRecord(stepHistory, nums, [], [], [], [hole]);
	}

	moveInHistoryRecord(stepHistory, nums, [...Array(nums.length).keys()]);
	return stepHistory;
};

export const InsertionSortLegend = createKey("Comparing", "Swapping", "Overwrite");

export default InsertionSort;
