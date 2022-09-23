/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and p is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.

Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

const pandigitalProducts = (n) => {
	if (n === 1) return 1;

	const isPandigital = (numString) => {
		const digits = numString.split("").map(Number);
		for (let i = 1; i <= digits.length; i++) {
			if (!digits.includes(i)) return false;
		}
		return true;
	};

	const is1toNPandigital = (n, numString) => {
		numString = numString.toString(); // just for safety
		if (numString.length !== n) {
			return false;
		}
		return isPandigital(numString);
	};

	const concatenateNums = (...numbers) => {
		let numString = "";
		numbers.forEach((num) => {
			numString += num.toString();
		});
		return numString;
	};

	const pandigitalNums = {}; // to check repeated products, key value pair to do look ups faster.
	const limit = 10 ** Math.floor(n / 2) - 1;

	// check https://wikimedia.org/api/rest_v1/media/math/render/svg/d0de7d7f503c776f718017147d9e886fe5fa9f23
	const minimumPosiblePandigital =
		(Math.pow(n, n) - n) / Math.pow(n - 1, 2) +
		(n - 1) * Math.pow(n, n - 2) -
		1;

	var sum = 0;
	for (let a = 2; a < limit; a++) {
		for (let b = 2; b < limit; b++) {
			let p = a * b;
			const concatenated = concatenateNums(a, b, p);
			if (concatenated.length > n) {
				break;
			} else if (
				concatenated.length < n ||
				Number(concatenated) < minimumPosiblePandigital
			) {
				continue;
			}
			if (is1toNPandigital(n, concatenated) && !pandigitalNums[p]) {
				pandigitalNums[p] = true;
				sum += p;
			}
		}
	}
	return sum;
};
