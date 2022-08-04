// Given a nested array return the sum of all numbers
// [1, 2, 3, 4, 5, [6, 7, 8], [[10, 11], 13 [14]]]

function nestedAddition(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
	const current = array[i];
	if (Array.isArray(current)) {
	    sum += nestedAddition(current)
	} else {
	    sum += current;
	}
    }
    return sum;
}
nestedAddition([1,2,3,[1, [2]]], 0);

function factorial(n) {
    if (n < 2) return 1;
    return n * factorial(n-1)
}




