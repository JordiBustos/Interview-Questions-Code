/*
Problem 23: Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
*/

// 1ª Calcular los números abundantes del 12 al LIMIT y almacenarlos
// 2ª Calcular para cada número entre [1, limit] si puede ser escrito como una suma de dos números

const checkAbundant = (number) => {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}

const sumOfNonAbundantNumbers = (n) => {
  const checkSum = (n, arr, memo) => {
    for (let i = 0; i < arr.length; i++){
      if ((n - arr[i]) in memo) return true // if number - arr[i], being arr[i] an abundant number is in memo, that's mean that number = arr[i] + arr[n - arr[i]]
    }
    return false
  }

  let abundant = []
  let sum = 0
  let memo = {}
  for (let i = 1; i <= n; i++){
    if (checkAbundant(i)) {
      abundant.push(i);
      memo[i] = 1
    }
    if (checkSum(i, abundant, memo)) continue
    sum += i
  }
  return sum

}

const LIMIT = 28123

sumOfNonAbundantNumbers(LIMIT);
