/*
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

*/

function quickSort(array) {
    if (array.length === 0) {
        return [];
    }
    // pivot could be the last one or some random number
    const pivotValue = array[0];
    
    // Sort elements into three piles
    let lesserThanPivot = [];
    let equalToPivot = [];
    let greaterThanPivot = [];
  
    for (let e of array) {
	if (e < pivotValue) {
	    lesserThanPivot.push(e);
    	} else if (e > pivotValue) {
      	    greaterThanPivot.push(e);
    	} else {
      	    equalToPitov.push(e);
    	}
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
}

// Very bad with sorted arrays
// O(n logn) average case and maybe faster than merge sort.
