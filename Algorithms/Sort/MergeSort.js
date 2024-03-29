/*
Another common intermediate sorting algorithm is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!
*/

function merge(left, right) {
	let i = 0, j = 0, mergedArr = [];

	while (i < left.length && j < right.length){
		if (left[i] < right[j]) mergedArr.push(left[i++]);
		else mergedArr.push(right[j++])
	}
	
	while (i < left.length){
		mergedArr.push(left[i++])
	}

	while (j < right.length){
		mergedArr.push(right[j++]);
	}

	return mergedArr;
} 

function mergeSort(arr) {
	if (arr.length == 1) return arr;

	let index = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, index));
	let right = mergeSort(arr.slice(index));

	return merge(left, right);
}

console.log(mergeSort([1,23, 34, 3, 54, 5, 2, 222]))

// Every case it's exactly the same (there are not worst or best case)
// Most JS engines uses Merge Sort.
// O(n logn) We goes through all the array but we don't have to make n²comparisons.



