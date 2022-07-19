import React from "react";
import NavBar from "./ExplainerNavBar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../../css/Explainer/Explainer.css";
import AppFooter from "../AppFooter/AppFooter";
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
			Bubble: {
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
				complexity_best: "Lorem ipsum",
				complexity_avg: "Lorem",
				complexity_worst: "Lorem",
				space_worst: "lorem",
				description:
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, cum quae, ab vel quam, quo fugiat voluptatum sed et maxime cupiditate dolore libero. Illo dolorum mollitia quo odio vitae. Debitis vero explicabo temporibus dolorum similique odio, fuga ex, perspiciatis autem atque, ut quisquam! Cum facere unde, cupiditate reprehenderit suscipit voluptatem harum aut iusto repudiandae adipisci ab consequuntur quo incidunt quae sed error, omnis earum fuga dolorum tempore consequatur magni? Architecto voluptate minus cupiditate, autem perferendis, dolorum neque nulla consequatur maxime fugit eaque quae molestiae expedita aperiam distinctio est non facere, excepturi corporis ducimus quasi magni quisquam ea blanditiis? Deleniti facilis nam esse, veritatis, laudantium perferendis temporibus pariatur voluptas officiis commodi tenetur. Saepe veritatis nihil fugit doloremque blanditiis eligendi excepturi adipisci enim ipsa, a provident sapiente commodi nemo laborum placeat iste quae omnis ducimus, velit, libero atque? Laboriosam, expedita! Veritatis, repellendus id natus deleniti minus totam consectetur maiores perferendis, iste odio placeat nisi? Optio, magni beatae! Ad deleniti commodi perspiciatis nesciunt sequi dolore voluptas doloribus? Vel eius sapiente distinctio qui repellat suscipit minima dolorem sunt, iusto nihil harum tenetur debitis totam magnam enim ipsum quibusdam molestias optio corrupti officia. Pariatur rem fugit sit! Cum rerum quos voluptas eveniet reprehenderit nam ipsa?",
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
			return (
				<div id="alg_description_table">
					<div className="alg-description">
						<h2 style={{ textAlign: "center" }}>The &ldquo;{String(which)} Sort&rdquo;</h2>
						<p> {alg_bodies[which].description}</p>
					</div>
					<table className="small ui celled table">
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

				<div className="row">
					<div className="column">
						<h2 id="heading-explainer">
							Selected:
							<code> {this.state.curr_algorithm} Sort</code>
						</h2>
						{printAlg(this.state.curr_algorithm)}
					</div>
					<div className="column">
						<div id="right-col">{printTable(this.state.curr_algorithm)}</div>
					</div>
				</div>
				<div id="ft">
					<AppFooter></AppFooter>
				</div>
			</div>
		);
	}
}

export default Explainer;
