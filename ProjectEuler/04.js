/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

const largestPalindromeProduct = (n) => {
      let upperLimit = Math.pow(10, n) - 1;
      let lowerLimit = 1 + parseInt(upperLimit / 10, 10);

      let maxProduct = 0;

      for (let i = upperLimit; i >= lowerLimit; i--) {
          for (let j = i; j >= lowerLimit; j--) {

            let product = i * j;
            if (product < maxProduct) break;
            let number = product;
            let reverse = 0;

            while (number != 0) {
                reverse = reverse * 10 + number % 10;
                number = parseInt(number / 10, 10);
            }

            if (product == reverse && product > maxproduct)
              maxProduct = product;
        }
    }
    return maxProduct;
}
console.log(largestPalindromeProduct(3));
