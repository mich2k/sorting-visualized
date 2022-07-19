import { swap, newTrace, moveInHistoryRecord, lastSorted, createRange, createKey } from "./helpers";

const HeapSort = (nums) => {
	const stepHistory = newTrace(nums);

	const left = (i) => 2 * i + 1;
	const right = (i) => 2 * i + 2;

	const maxHeapify = (array, i, heapsize) => {
		const leftChild = left(i);
		const rightChild = right(i);

		moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [i, leftChild]);

		let largest = leftChild < heapsize && array[leftChild] > array[i] ? leftChild : i;

		moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [largest, rightChild]);

		if (rightChild < heapsize && array[rightChild] > array[largest]) largest = rightChild;

		if (largest !== i) {
			moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [], [i, largest]);

			swap(array, i, largest);

			moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [], [i, largest]);

			maxHeapify(array, largest, heapsize);
		}
	};

	const BuildMaxHeap = (array) => {
		const start = Math.floor(array.length / 2);
		const heapsize = array.length;
		for (let i = start; i >= 0; i--) {
			maxHeapify(array, i, heapsize);
		}

		moveInHistoryRecord(
			stepHistory,
			array,
			lastSorted(stepHistory),
			[],
			[],
			[],
			createRange(0, array.length)
		);
	};

	const heapSort = (array) => {
		BuildMaxHeap(array);
		let heapsize = array.length;
		for (let i = array.length - 1; i > 0; i--) {
			moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [], [0, i]);

			swap(array, 0, i);
			heapsize -= 1;

			moveInHistoryRecord(stepHistory, array, [...lastSorted(stepHistory), i], [], [0, i]);

			maxHeapify(array, 0, heapsize);

			moveInHistoryRecord(
				stepHistory,
				array,
				lastSorted(stepHistory),
				[],
				[],
				[],
				createRange(0, heapsize)
			);
		}
		moveInHistoryRecord(stepHistory, array, [...lastSorted(stepHistory), 0]);
	};

	heapSort(nums);
	return stepHistory;
};

export const HeapSortLegend = createKey("Comparing", "Swapping", null, "Heap");

export default HeapSort;
