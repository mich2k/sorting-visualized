import { swap, newTrace, moveInHistoryRecord, lastSorted, createKey } from "./helpers";

const CocktailSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let i = nums.length - 1; i > 0; i--) {
		let j;
		// Backwards
		for (j = nums.length - 1; j > i; j--) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [j, j + 1]);

			if (nums[j] < nums[j - 1]) {
				[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
			}
		}

		// Forwards
		for (j = 0; j < i; j++) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [j, j + 1]);

			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
		moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1 - i]);
	}
	moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1]);

	return stepHistory;
};

export const CocktailSortLegend = createKey("Comparing");

export default CocktailSort;
