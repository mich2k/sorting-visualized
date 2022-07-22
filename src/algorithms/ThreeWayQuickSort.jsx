import { swap, newTrace, moveInHistoryRecord, lastSorted, createRange, createKey } from "./helpers";

const ThreeWayQuickSort = (nums) => {
	const trace = newTrace(nums);

	function choosePivot(array, start, end) {
		return Math.floor(Math.random() * (end - start)) + start;
	}

	function partition(array, start, end) {
		const pivot = array[start];
		let i = start + 1;
		let j = start + 1;
		let k = start + 1;
		moveInHistoryRecord(trace, array, lastSorted(trace), [start]);

		while (k < end) {
			console.dir(trace);
			if (array[k] === pivot) {
				moveInHistoryRecord(
					trace,
					array,
					lastSorted(trace),
					[start, ...createRange(start, i)],
					[k],
					[],
					createRange(i, j)
				);

				swap(array, i, k);
				moveInHistoryRecord(
					trace,
					array,
					lastSorted(trace),
					[start, ...createRange(start, i)],
					[i],
					[],
					createRange(i, j)
				);

				if (j > i) swap(array, j, k);
				i += 1;
				j += 1;
			} else if (array[k] < pivot) {
				moveInHistoryRecord(
					trace,
					array,
					lastSorted(trace),
					[start, ...createRange(start, i)],
					[k],
					[],
					createRange(i, j)
				);

				swap(array, j, k);
				moveInHistoryRecord(
					trace,
					array,
					lastSorted(trace),
					[start, ...createRange(start, i)],
					[j],
					[],
					createRange(i, j)
				);

				j += 1;
			}
			k += 1;
		}

		const pivot_elements = i - start;
		i -= 1;
		j -= 1;
		while (i >= start) {
			swap(array, i, j);
			i -= 1;
			j -= 1;
		}

		moveInHistoryRecord(
			trace,
			array,
			lastSorted(trace),
			createRange(j + 1, j + 1 + pivot_elements),
			[],
			[],
			createRange(start, j + 1)
		);
		return [j + 1, j + 1 + pivot_elements];
	}

	function recursiveQuickSort3(array, start, end) {
		if (start >= end - 1) {
			if (start === end - 1) {
				// Visualize: Mark only item as sorted
				moveInHistoryRecord(trace, array, [...lastSorted(trace), start]);
			}
			return null;
		}

		let pivot = choosePivot(array, start, end);

		moveInHistoryRecord(trace, array, lastSorted(trace), [pivot]);

		swap(array, start, pivot);

		moveInHistoryRecord(trace, array, lastSorted(trace), [pivot]);

		let [pivotStart, pivotEnd] = partition(array, start, end);

		moveInHistoryRecord(trace, array, [...lastSorted(trace), ...createRange(pivotStart, pivotEnd)]);

		recursiveQuickSort3(array, start, pivotStart);
		recursiveQuickSort3(array, pivotEnd, end);
	}

	recursiveQuickSort3(nums, 0, nums.length);

	return trace;
};

export const ThreeWayQuickSortLegend = createKey("Comparing", "Swapping", null, "Less than pivot");

export default ThreeWayQuickSort;
