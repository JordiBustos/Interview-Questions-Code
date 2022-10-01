// https://projecteuler.net/problem=037
const isPrime = (n) => {
	if (n < 2) return false;
	if (n == 2) return true;
	if (n % 2 == 0) return false;

	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i == 0) return false;
	}
	return true;
};

const slicePrimeLeft = (n, i) => {
	return parseInt(n.toString().slice(i));
};

const slicePrimeRigth = (n, i) => {
	return parseInt(n.toString().slice(0, n.toString.length - i));
};

const truncatablePrimes = (n) => {
	let findedPrimes = 0;
	let i = 0; let sum = 0;

	while (findedPrimes < n) {
    if (isPrime(i)) {
      let isTruncatable = true;
      
      for (let j = 0; j < i.toString().length; j++) {
        let left = slicePrimeLeft(i, j);
        let right = slicePrimeRigth(i, j);

        if (!isPrime(left) || !isPrime(right)) {
          isTruncatable = false;
          break;
        }
      }
      if (isTruncatable) {
        findedPrimes++;
        sum += i;
      }
    }
    i+=2;
  }
  return sum;
};
