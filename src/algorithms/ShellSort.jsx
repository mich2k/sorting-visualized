import { swap, newTrace, moveInHistoryRecord, createRange, createKey } from "./helpers";

const ShellSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let j = gap; j < nums.length; j++) {
			for (let i = j - gap; i >= 0; i -= gap) {
				moveInHistoryRecord(stepHistory, nums, [], [i, i + gap]);
				if (nums[i + gap] < nums[i]) {
					moveInHistoryRecord(stepHistory, nums, [], [], [i, i + gap]);
					swap(nums, i, i + gap);
					moveInHistoryRecord(stepHistory, nums, [], [], [i, i + gap]);
				} else {
					break;
				}
			}
		}
	}

	moveInHistoryRecord(stepHistory, nums, createRange(0, nums.length));
	return stepHistory;
};

export const ShellSortLegend = createKey("Comparing", "Swapping");

export default ShellSort;
