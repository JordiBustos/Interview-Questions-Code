/*
    Non comparison sorts.
    O(n k) where k is the maximum key length. It depends on how big are the numbers that are passed into the array.
    It depends on the distribution of the numbers
    If we have 1000 numbers well distributed it's efficient but if we have 500 numbers between 1 and 100 it's quite bad
*/

function radixSort(arr) {
    const longestNumber = getLongestNumber(arr);

    // arr of ten empty arrays
    const buckets = new Array(10).fill().map(() => []);
    
    for (let i = longestNumber - 1; i >= 0; i--) {
	while(arr.length) {
	    const current = arr.shift();
	    buckets[getDigits(current, i, longestNumber)].push(current)
	}
	for (let j = 0; j < 10; j++) {
	    while(buckets[j].length) {
		array.push(buckets[j].shift());
	    }
	}
    }

    return arr

}

function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;

    const mod = longestNumber - size;
    return string[place-mod] || 0;
}

function getLongestNumber(arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
	const currentLength = arr[i].toString().length
    	longest = currentLength > longest ? currentLength : longest;
    }
    return longest
}
