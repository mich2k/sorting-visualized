import { swap, newTrace, moveInHistoryRecord, lastSorted, createKey } from "./helpers";

const BubbleSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [j, j + 1]);
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1);

				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [j, j + 1]);
			}
		}

		moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1 - i]);
	}

	return stepHistory;
};

export const BubbleSortLegend = createKey("Comparing", "Swapping");

export default BubbleSort;
