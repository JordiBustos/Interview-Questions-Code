// https://projecteuler.net/problem=036

const isPalindrome = (n, base = "binary") => {
	let str;
	base == "binary" ? (str = n.toString(2)) : (str = n.toString());
	return str === str.split("").reverse().join("");
};

const doubleBasePalindromes = (n) => {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		if (isPalindrome(i) && isPalindrome(i, "decimal")) {
			sum += i;
		}
	}
	return sum;
};
