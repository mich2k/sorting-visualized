import React from "react";
import { Component } from "react";
import HomeNavbar from "../HomeNavbar";
import "../../css/Home/Home.css";
import SortVisualizer from "./SortVisualizer/SortVisualizer";
import BubbleSort, { BubbleSortLegend } from "../../algorithms/BubbleSort";
import SelectionSort, { SelectionSortLegend } from "../../algorithms/SelectionSort";
import InsertionSort, { InsertionSortLegend } from "../../algorithms/InsertionSort";
import MergeSort, { MergeSortLegend } from "../../algorithms/MergeSort";
import QuickSort, { QuickSortLegend } from "../../algorithms/QuickSort";
import HeapSort, { HeapSortLegend } from "../../algorithms/HeapSort";
import ShellSort, { ShellSortLegend } from "../../algorithms/ShellSort";
import AppFooter from "../AppFooter/AppFooter";
class Home extends Component {
	state = {
		array: [],
		arraySize: 5,
		stepHistory: [],
		algorithm: "Bubble Sort"
	};

	ALG = {
		"Bubble Sort": BubbleSort,
		"Selection Sort": SelectionSort,
		"Insertion Sort": InsertionSort,
		"Merge Sort": MergeSort,
		"Quick Sort": QuickSort,
		"Heap Sort": HeapSort,
		"Shell Sort": ShellSort
	};

	ALG_MAP = {
		"Bubble Sort": BubbleSortLegend,
		"Selection Sort": SelectionSortLegend,
		"Insertion Sort": InsertionSortLegend,
		"Merge Sort": MergeSortLegend,
		"Quick Sort": QuickSortLegend,
		"Heap Sort": HeapSortLegend,
		"Shell Sort": ShellSortLegend
	};

	componentDidMount() {
		this.generateInOrderArray();
	}

	generateInOrderArray = () => {
		{
			/* commit 19.07.22*/
		}
		function shuffleArray(arr) {
			for (let i = arr.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		}
		let genArray = Array(this.state.arraySize);
		for (let i = 1; i <= genArray.length; i++) {
			genArray[i - 1] = i;
		}
		genArray = shuffleArray(genArray);
		console.dir(genArray);
		console.log(this.state.arraySize);

		this.setState(
			{
				array: genArray,
				stepHistory: []
			},
			this.createRecord
		);
	};

	generateRandomArray = () => {
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max)) + 1;
		}

		const array = Array(this.state.arraySize)
			.fill(0)
			.map(() => getRandomInt(this.state.arraySize * 5));

		this.setState(
			{
				array,
				stepHistory: []
			},
			this.createRecord
		);
	};

	handleAlgorithmChange = (e) => {
		let alg = e.target.value + " Sort";
		// console.log(alg);
		this.setState({ algorithm: alg }, this.generateInOrderArray());
	};

	handleArraySizeChange = (e) => {
		function syncGenCall() {
			this.generateInOrderArray();
		}
		let arrLen = Number(e.target.value);
		arrLen = arrLen > 500 ? 500 : arrLen;
		arrLen = arrLen < 0 ? 3 : arrLen;
		this.setState({ arraySize: arrLen }, syncGenCall);
	};

	createRecord = () => {
		const numbers = [...this.state.array];
		const sort = this.ALG[this.state.algorithm];
		if (sort) {
			const stepHistory = sort(numbers);
			this.setState({ stepHistory });
		}
	};

	render() {
		const colorKey = this.ALG_MAP[this.state.algorithm];
		return (
			<div className="menu-main">
				<HomeNavbar
					onGenerateRandomArray={this.generateRandomArray}
					onGenerateInOrderRandomArray={this.generateInOrderArray}
					algorithm={this.state.algorithm}
					onAlgorithmChange={this.handleAlgorithmChange}
					arraySize={this.state.arraySize}></HomeNavbar>
				<b>
					{" "}
					<span id="selected-alg-header">
						Selected: <code>{this.state.algorithm}</code>
					</span>
				</b>
				<SortVisualizer
					array={this.state.array}
					stepHistory={this.state.stepHistory}
					colorKey={colorKey}
					algorithm={this.state.algorithm}
					onArraySizeChange={this.handleArraySizeChange}></SortVisualizer>

				<AppFooter></AppFooter>
			</div>
		);
	}
}

export default Home;
