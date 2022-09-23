/*
  145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
  Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.
  Note: as 1! = 1 and 2! = 2 are not sums they are not included.

  let n a number
  d digits of n

  10^(d-1) <= n < 10^d
  supposing n is 9999...9 number
  10^(d-1) <= d 9! < 10^d

  (d-1) log(10) <= log(d 9!) < d log(10)
  (d-1) log(10) <= d log(9!) + log(d!) < d log(10)
  d-1 <= log_10(d) + 5.56 < d
  d - log_10(d) <= 6.56 < d - log_10(d) + 1
  d < 7.33 < d + 1
  d < 7 < d+1

  so 7 digits max is our upper bound
*/

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

const solution = () => {
  const numbers = []
  let sum = 0;
  for (let i = 10; i < 1000000; i++) {
    const digits = i.toString().split('').map(Number);
    const sumOfFactorials = digits.reduce((acc, digit) => acc + factorial(digit), 0);
    if (sumOfFactorials == i) {
      numbers.push(i);
      sum += i;
    }
  }
  return {sum, numbers}
}
