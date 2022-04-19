/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	 0	  1	   2	   3	   4
Value	 7	  9	   11    13	   15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

function pairwise(arr, arg) {
  /*
    For example
    [7, 9, 11, 13, 15], if the arr is sorted and if arr[i] + arr[j] > arg there is no need to compute arr[i] + arr[j+1] 'cause it will be greater or equal than args.
    If it's equal it will be discarted because we want to minimize the returned value computed with arr[i].
    Sorting the array saves computations as the array grows in size
  */
  let arrCopy = arr.slice()
  arrCopy = arrCopy.sort((a,b) => a-b);
  console.log(arrCopy)

  let pairIndex = [];

  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++ ){
      let sum = arr[i] + arr[j];
      if (!pairIndex.includes(i) && !pairIndex.includes(j) && sum === arg){
        pairIndex.push(i, j);
        break
      }
      if (sum >= arg && !pairIndex.includes(i) && !pairIndex.includes(j)) break
    }
  }
  return pairIndex.reduce((sum, curr, index) => sum + curr, 0);
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));





//
