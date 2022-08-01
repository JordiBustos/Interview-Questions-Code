/*
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8 4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

const digitnPowers = (n) => {
  // [0^n, 1^n, 2^n, ..., 9^n]
  const pow = Array(10).fill(0).map((_, i) => i ** n)

  const check = (k) => {
    let acc = 0
    let limit = k.toString().split('').every(d => {acc += pow[d]; return acc <= k})

    return limit && (acc == k)
  }

  let leftLimit = Math.pow(2, n)
  let rightLimit = Math.pow(9, n + 1)

  let sum = 0

  for (let i = leftLimit; i < rightLimit; i++){
    if (check(i)) sum += i
  }
  return sum
}
