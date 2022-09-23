/*
https://projecteuler.net/problem=35

A  circular prime with at least two digits can only consist of combinations of the digits 1, 3, 7 or 9, because having 0, 2, 4, 6 or 8 as the last digit makes the number divisible by 2, and having 0 or 5 as the last digit makes it divisible by 5.
*/

const PRIMES = [false, false, true];

const permute = (num) => {
  const digits = num.toString().split('');
  digits.push(digits.shift());
  return parseInt(digits.join(""));
}

const circularPrimes = (n) => {
	const isPrime = (num) => {
		if (PRIMES[num] !== undefined) return PRIMES[num];
		if (num % 2 == 0) return false;
		for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
			if (num % i === 0) return (PRIMES[num] = false);
		}
		return (PRIMES[num] = true);
	};

	const isCirclePrime = (n) => {
		const nString = n.toString();
		// if includes 0, 2, 4, 5, 6, 8 then it is not a circular prime because some permutation will be divisible by 2 or 5
		if (
			nString.includes("2") ||
			nString.includes("4") ||
			nString.includes("6") ||
			nString.includes("8") ||
			nString.includes("0") ||
			nString.includes("5")
		) {
			return false;
		}

		let currPermutation = n;

		for (let i = 0; i < nString.length; i++) {
			if (!isPrime(currPermutation)) return false;
      currPermutation = permute(currPermutation);
		}
		return true;
	};

	let sum = 2;
	for (let i = 3; i < n; i += 2) {
		if (isCirclePrime(i)) {
			sum++;
		}
	}
	return sum;
};

console.log(circularPrimes(100000));
