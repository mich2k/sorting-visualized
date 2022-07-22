import { newTrace, moveInHistoryRecord, createKey } from "./helpers";

const MergeSort = (nums) => {
	const stepHistory = newTrace(nums);

	function merge(original, start, mid, end) {
		const left = original.slice(start, mid);
		const right = original.slice(mid, end);
		let i = 0;
		let j = 0;
		let k = 0;
		while (i < left.length && j < right.length) {
			if (left[i] <= right[j]) {
				moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
				original[k + start] = left[i];
				i++;
				moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
			} else {
				moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
				original[k + start] = right[j];
				j++;
				moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
			}
			k++;
		}
		while (i < left.length) {
			moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
			original[k + start] = left[i];
			i++;
			k++;
			moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
		}
		while (j < right.length) {
			moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
			original[k + start] = right[j];
			j++;
			k++;
			moveInHistoryRecord(stepHistory, original, [], [], [], [k + start]);
		}

		left.length = 0;
		right.length = 0;
	}

	function recursiveMergeSort(original, start, end) {
		const length = end - start;
		if (length < 2) {
			if (length < 1) return original;
			else return [original[start]];
		}

		const midPoint = Math.floor((start + end) / 2);

		moveInHistoryRecord(
			stepHistory,
			original,
			[],
			[...Array(midPoint - start).keys()].map((i) => i + start)
		);
		recursiveMergeSort(original, start, midPoint);

		moveInHistoryRecord(
			stepHistory,
			original,
			[],
			[...Array(end - midPoint).keys()].map((i) => i + midPoint)
		);
		recursiveMergeSort(original, midPoint, end);

		merge(original, start, midPoint, end);
	}

	recursiveMergeSort(nums, 0, nums.length);

	moveInHistoryRecord(stepHistory, nums, [...Array(nums.length).keys()]);
	return stepHistory;
};

export const MergeSortLegend = createKey("Merge Sort Called", null, "Overwrite");

export default MergeSort;
