import React from "react";
import NavBar from "./ExplainerNavBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../css/Explainer/Explainer.css";
import AppFooter from "../AppFooter/AppFooter";
import shellSortGif from "../../res/shell-sort.gif";
class Explainer extends React.Component {
	state = { curr_algorithm: "Bubble" };

	handleAlgorithmChange = (e) => {
		let alg = e.target.value;
		// console.log(alg);
		this.setState({ curr_algorithm: alg });
	};

	componentDidUpdate() {}
	render() {
		const alg_bodies = {
			ThreeWayQuick: {
				complexity_best: <span>O(n)</span>,
				complexity_avg: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				gif_size: 400,

				gif_src: "https://miro.medium.com/max/1298/1*wQXgYAYiCHO5IOQcEjcacA.jpeg",
				description: `
				In simple QuickSort algorithm, we select an element as pivot, partition the array around a pivot and recur for subarrays on the left and right of the pivot. 
				Consider an array which has many redundant elements. For example, {1, 4, 2, 4, 2, 4, 1, 2, 4, 1, 2, 2, 2, 2, 4, 1, 4, 4, 4}. If 4 is picked as a pivot in Simple Quick Sort, we fix only one 4 and recursively process remaining occurrences.
				The idea of 3 way Quick Sort is to process all occurrences of the pivot and is based on Dutch National Flag algorithm. 
                    `,
				snippet: `var i, j;
 
				/*
				 * This function partitions a in three parts a) a[l..i] contains all elements
				 * smaller than pivot b) a[i+1..j-1] contains all occurrences of pivot c)
				 * a[j..r] contains all elements greater than pivot
				 */
				function partition(a , l , r) {
			 
					i = l - 1;
					j = r;
					var p = l - 1, q = r;
					var v = a[r];
			 
					while (true) {
			 
						// From left, find the first element greater than
						// or equal to v. This loop will definitely
						// terminate as v is last element
						while (a[++i] < v)
							;
			 
						// From right, find the first element smaller than
						// or equal to v
						while (v < a[--j])
							if (j == l)
								break;
			 
						// If i and j cross, then we are done
						if (i >= j)
							break;
			 
						// Swap, so that smaller goes on left greater goes
						// on right
						var temp = a[i];
						a[i] = a[j];
						a[j] = temp;
			 
						// Move all same left occurrence of pivot to
						// beginning of array and keep count using p
						if (a[i] == v) {
							p++;
							temp = a[i];
							a[i] = a[p];
							a[p] = temp;
			 
						}
			 
						// Move all same right occurrence of pivot to end of
						// array and keep count using q
						if (a[j] == v) {
							q--;
							temp = a[q];
							a[q] = a[j];
							a[j] = temp;
						}
					}
			 
					// Move pivot element to its correct index
					var temp = a[i];
					a[i] = a[r];
					a[r] = temp;
			 
					// Move all left same occurrences from beginning
					// to adjacent to arr[i]
					j = i - 1;
					for (k = l; k < p; k++, j--) {
						temp = a[k];
						a[k] = a[j];
						a[j] = temp;
					}
			 
					// Move all right same occurrences from end
					// to adjacent to arr[i]
					i = i + 1;
					for (k = r - 1; k > q; k--, i++) {
						temp = a[i];
						a[i] = a[k];
						a[k] = temp;
					}
				}
			 
				// 3-way partition based quick sort
				function quicksort(a , l , r) {
					if (r <= l)
						return;
			 
					i = 0;
					j = 0;
			 
					// Note that i and j are passed as reference
					partition(a, l, r);
			 
					// Recur
					quicksort(a, l, j);
					quicksort(a, i, r);
				}
			 
				// A utility function to print an array
				function printarr(a , n) {
					for (i = 0; i < n; ++i)
						document.write(" "+ a[i]);
					document.write("<br/>");
				}
			 
				// Driver code   
					var a = [ 4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4 ];
					var size = a.length;
			 
					// Function Call
					printarr(a, size);
					quicksort(a, 0, size - 1);
					printarr(a, size);`
			},
			Cocktail: {
				complexity_best: <span>O(n)</span>,
				complexity_avg: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: <span>O(1)</span>,
				gif_size: 300,

				gif_src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif",
				description: `
				Cocktail Shaker Sort is an algorithm that is a Bidirectional Bubble Sort.
				The algorithm extends bubble sort by operating in two directions.
				While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal
				performance improvements.
                    `,
				snippet: `function cocktailShakerSort (items) {
					for (let i = items.length - 1; i > 0; i--) {
					  let j
				  
					  // Backwards
					  for (j = items.length - 1; j > i; j--) {
						if (items[j] < items[j - 1]) {
						  [items[j], items[j - 1]] = [items[j - 1], items[j]]
						}
					  }
				  
					  // Forwards
					  for (j = 0; j < i; j++) {
						if (items[j] > items[j + 1]) {
						  [items[j], items[j + 1]] = [items[j + 1], items[j]]
						}
					  }
					}
				  
					return items
				  }`
			},
			Bubble: {
				complexity_best: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_avg: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: <span>O(1)</span>,
				gif_size: 300,

				gif_src:
					"https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif",
				description: `
                    Is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements bubble to the top of the list.
                    Due to its simplicity, bubble sort is often used to introduce the concept of an algorithm, or a sorting algorithm, to introductory computer science students.
                    `,
				snippet: `function swap(arr, xp, yp){
          var temp = arr[xp];
          arr[xp] = arr[yp];
          arr[yp] = temp;
        }
      function bubbleSort( arr, n)
      {
      var i, j;
      for (i = 0; i < n-1; i++){
          for (j = 0; j < n-i-1; j++){
              if (arr[j] > arr[j+1]){
              swap(arr,j,j+1);
              }
            }
          }
        }`
			},
			Quick: {
				complexity_best: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_avg: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				gif_size: 300,

				gif_src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif",
				description: `Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

                Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined. `,
				snippet: `
      // A utility function to swap two elements
      function swap(arr, i, j) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
       
      /* This function takes last element as pivot, places
         the pivot element at its correct position in sorted
         array, and places all smaller (smaller than pivot)
         to left of pivot and all greater elements to right
         of pivot */
      function partition(arr, low, high) {
       
          // pivot
          let pivot = arr[high];
       
          // Index of smaller element and
          // indicates the right position
          // of pivot found so far
          let i = (low - 1);
       
          for (let j = low; j <= high - 1; j++) {
       
              // If current element is smaller
              // than the pivot
              if (arr[j] < pivot) {
       
                  // Increment index of
                  // smaller element
                  i++;
                  swap(arr, i, j);
              }
          }
          swap(arr, i + 1, high);
          return (i + 1);
      }
       
      /* The main function that implements QuickSort
                arr[] --> Array to be sorted,
                low --> Starting index,
                high --> Ending index
       */
      function quickSort(arr, low, high) {
          if (low < high) {
       
              // pi is partitioning index, arr[p]
              // is now at right place
              let pi = partition(arr, low, high);
       
              // Separately sort elements before
              // partition and after partition
              quickSort(arr, low, pi - 1);
              quickSort(arr, pi + 1, high);
          }
      }`
			},
			Merge: {
				complexity_best: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_avg: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_worst: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				space_worst: <span>O(n)</span>,
				gif_size: 300,

				gif_src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif",
				description: `
                This algorithm uses a recursive algorithm to achieve its results. The divide-and-conquer algorithm breaks down a big problem into smaller, more manageable pieces that look similar to the initial problem. It then solves these subproblems recursively and puts their solutions together to solve the original problem. Divide-and-conquer recursively solves subproblems; each subproblem must be smaller than the original problem, and each must have a base case.
                By definition, if it is only one element in the list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too. `,
				snippet: `function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}`
			},
			Heap: {
				complexity_best: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_avg: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				complexity_worst: (
					<span>
						O(<em>n</em> log <em>n</em>)
					</span>
				),
				gif_size: 300,

				gif_src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif",
				space_worst: <span>O(n)</span>,
				description: `Is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step.
                `,
				snippet: `
function sort( arr)
{
    var n = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}`
			},
			Shell: {
				complexity_best: <span>O(n)</span>,
				complexity_avg: (
					<span>
						O( (<em>n</em> log <em>n</em>)<sup>2</sup>)
					</span>
				),
				complexity_worst: (
					<span>
						O( (<em>n</em> log <em>n</em>)<sup>2</sup>)
					</span>
				),
				space_worst: <span>O(1)</span>,
				gif_size: 300,
				gif_src: { shellSortGif }.shellSortGif,
				description: `
                Is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. 
                `,
				snippet: `function shellSort(arr) {
          let n = arr.length;
        
          //Start with a really large gap, and then reduce the gap until there isn't any
          //With this, the gap starts as half of the array length, and then half of that every time
          for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
          {
            //Do a insertion sort for each of the section the gap ends up dividing
            for (let i = gap; i < n; i += 1)
            {
              //We store the current varible
              let temp = arr[i];
              
              //This is the insection sort to sort the section into order
              let j;
              for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)
              {
                arr[j] = arr[j-gap];
              }
        
              arr[j] = temp;
            }
          }
        
          return arr;
        }`
			},
			Selection: {
				complexity_best: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_avg: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: <span>O(1)</span>,
				gif_size: 300,
				gif_src:
					"https://i2.wp.com/algorithms.tutorialhorizon.com/files/2019/01/Selection-Sort-Gif.gif?ssl=1",
				description: `
                The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.
                `,
				snippet: `
        function swap(arr,xp, yp)
        {
            var temp = arr[xp];
            arr[xp] = arr[yp];
            arr[yp] = temp;
        }
         
        function selectionSort(arr,  n)
        {
            var i, j, min_idx;
         
            // One by one move boundary of unsorted subarray
            for (i = 0; i < n-1; i++)
            {
                // Find the minimum element in unsorted array
                min_idx = i;
                for (j = i + 1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
         
                // Swap the found minimum element with the first element
                swap(arr,min_idx, i);
            }
        }`
			},
			Insertion: {
				complexity_best: <span>O(n)</span>,
				complexity_avg: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				complexity_worst: (
					<span>
						O(n<sup>2</sup>)
					</span>
				),
				space_worst: <span>O(1)</span>,
				gif_size: 300,
				gif_src:
					"https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif",
				description: `
                Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
                `,
				snippet: `
        function insertionSort(arr, n) 
        { 
            let i, key, j; 
            for (i = 1; i < n; i++)
            { 
                key = arr[i]; 
                j = i - 1; 
           
                /* Move elements of arr[0..i-1], that are 
                greater than key, to one position ahead 
                of their current position */
                while (j >= 0 && arr[j] > key)
                { 
                    arr[j + 1] = arr[j]; 
                    j = j - 1; 
                } 
                arr[j + 1] = key; 
            } 
        }`
			}
		};

		function printTable(which) {
			//console.dir(alg_bodies[which].gif_src);
			return (
				<div id="alg_description_table">
					<div className="alg-description">
						<h2 style={{ textAlign: "center" }}>The &ldquo;{String(which)} Sort&rdquo;</h2>
						<p> {alg_bodies[which].description}</p>
					</div>
					<div id="alg-gif" className="center">
						<img
							src={alg_bodies[which].gif_src}
							width={`${alg_bodies[which].gif_size}px`}
							alt="algorithm gif"
						/>
					</div>
					<table id="complexity-alg-table" className="small ui celled table">
						<thead>
							<tr>
								<th>{String(which) + " Sort"}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-label="topic">Complexity Min</td>
								<td data-label="comp_min">{alg_bodies[which].complexity_best}</td>
							</tr>
							<tr>
								<td data-label="topic">Complexity Avg</td>
								<td data-label="comp_avg">{alg_bodies[which].complexity_avg}</td>
							</tr>
							<tr>
								<td data-label="topic">Complexity Max</td>
								<td data-label="comp_max">{alg_bodies[which].complexity_worst}</td>
							</tr>
							<tr>
								<td data-label="topic">Space Worst</td>
								<td data-label="space">{alg_bodies[which].space_worst}</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		}

		function printAlg(which) {
			return (
				<div className="code-block">
					<SyntaxHighlighter language="javascript" style={atomDark}>
						{alg_bodies[String(which)].snippet}
					</SyntaxHighlighter>
				</div>
			);
		}
		// src: https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/
		return (
			<div className="main-explainer">
				<NavBar onAlgorithmChange={this.handleAlgorithmChange}></NavBar>

				<div className="wrapper row">
					<div id="left-col" className="column">
						<h2 id="heading-explainer">
							Selected:
							<code> {this.state.curr_algorithm} Sort</code>
						</h2>
						<div id="alg-highlight-wrapper">{printAlg(this.state.curr_algorithm)}</div>
					</div>
					<div className="column">
						<div id="right-col">{printTable(this.state.curr_algorithm)}</div>
					</div>
					<div className="push"></div>
				</div>
				<div id="ft">
					<AppFooter></AppFooter>
				</div>
			</div>
		);
	}
}

export default Explainer;
