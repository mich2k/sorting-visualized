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
import ThreeWayQuickSort, { ThreeWayQuickSortLegend } from "../../algorithms/ThreeWayQuickSort";
import CocktailSort, { CocktailSortLegend } from "../../algorithms/CocktailSort";

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
		"Shell Sort": ShellSort,
		"Cocktail Sort": CocktailSort,
		"ThreeWayQuick Sort": ThreeWayQuickSort
	};

	ALG_MAP = {
		"Bubble Sort": BubbleSortLegend,
		"Selection Sort": SelectionSortLegend,
		"Insertion Sort": InsertionSortLegend,
		"Merge Sort": MergeSortLegend,
		"Quick Sort": QuickSortLegend,
		"Heap Sort": HeapSortLegend,
		"Shell Sort": ShellSortLegend,
		"Cocktail Sort": CocktailSortLegend,
		"ThreeWayQuick Sort": ThreeWayQuickSortLegend
	};

	componentDidMount() {
		this.generateInOrderArray();
	}

	generateInOrderSortedArray = () => {
		let genArray = Array(this.state.arraySize);
		for (let i = 1; i <= genArray.length; i++) {
			genArray[i - 1] = i;
		}

		this.setState(
			{
				array: genArray,
				stepHistory: []
			},
			this.createRecord
		);
	};

	generateAlmostSortedInOrderArray = () => {
		const ALG_SIZE_SHUFFLENESS_MAP = {
			3: 1,
			5: 2,
			20: 10,
			50: 25,
			100: 50,
			200: 100,
			300: 150,
			400: 200,
			500: 250
		};

		function shuffleArray(arr, shuffleness) {
			for (let i = arr.length - shuffleness; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
			return arr;
		}
		let genArray = Array(this.state.arraySize);
		for (let i = 1; i <= genArray.length; i++) {
			genArray[i - 1] = i;
		}
		let shuffleness = ALG_SIZE_SHUFFLENESS_MAP[genArray.length];
		genArray = shuffleArray(genArray, shuffleness);
		this.setState(
			{
				array: genArray,
				stepHistory: []
			},
			this.createRecord
		);
	};

	generateReverseInOrderArray = () => {
		let genArray = Array(this.state.arraySize);
		for (let i = 1; i <= genArray.length; i++) {
			genArray[i - 1] = i;
		}
		genArray = genArray.reverse();
		this.setState(
			{
				array: genArray,
				stepHistory: []
			},
			this.createRecord
		);
	};

	generateInOrderArray = () => {
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
		// console.dir(genArray);
		// console.log(this.state.arraySize);

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
		this.setState({ algorithm: alg }, this.generateInOrderArray());
		console.log(alg);
	};

	handleArraySizeChange = (e) => {
		function syncGenCall() {
			let chosenRandomizer = document.getElementById("randomizer-select").value;
			chosenRandomizer === "inOrderRandomize"
				? this.generateInOrderArray()
				: chosenRandomizer === "randomRandomize"
				? this.generateRandomArray()
				: chosenRandomizer === "inOrderReverseRandomize"
				? this.generateReverseInOrderArray()
				: chosenRandomizer === "inOrderAlmSortedRandomize"
				? this.generateAlmostSortedInOrderArray()
				: chosenRandomizer === "sortedArray"
				? this.generateInOrderSortedArray()
				: null;
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
					onGenerateReverseInOrderArray={this.generateReverseInOrderArray}
					onGenerateAlmostSortedInOrderRandomArray={this.generateAlmostSortedInOrderArray}
					onGenerateSortedArray={this.generateInOrderSortedArray}
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
