/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?
*/

function powerDigitSum(e) {
  const n = BigInt(Math.pow(2, e))
  const d = n.toString().split('')

  return d.reduce((sum, digit) => sum + parseInt(digit), 0)
}
