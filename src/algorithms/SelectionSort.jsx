import { swap, newTrace, moveInHistoryRecord, lastSorted, createKey } from "./helpers";

const SelectionSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let i = 0; i < nums.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < nums.length; j++) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex, j]);
			if (nums[j] < nums[minIndex]) {
				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex], [j]);
				minIndex = j;

				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex], [j]);
			}
		}

		moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [i, minIndex]);

		swap(nums, i, minIndex);

		moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), i], [], []);
	}

	moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1]);

	return stepHistory;
};

export const SelectionSortLegend = createKey("Comparing", "Swapping");

export default SelectionSort;
