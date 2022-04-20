/*
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

*/

function quickSort(array) {
  	if (array.length === 0) {
    		return [];
  	}
  	const pivotValue = array[0];
  // Sort elements into three piles
  	let lesser = [];
	let equal = [];
 	let greater = [];
  
	for (let e of array) {
    		if (e < pivotValue) {
      			lesser.push(e);
    		} else if (e > pivotValue) {
      			greater.push(e);
    		} else {
      			equal.push(e);
    		}
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}

/*
 Haskell implementation

quickSort[] = []
quickSort(x:xs) = [a | a <- xs, a <= x] ++ x ++ [b | b <- xs, b > x]

"a tal que a pertenece a xs y a <= x"
	concatenado a x concatenado 
a "b tal que b pertenece a xs y b > x"

y el caso base es el array vacío que retorna vacío.
x es el primer elemento
*/
