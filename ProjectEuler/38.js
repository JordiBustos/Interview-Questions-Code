// https://projecteuler.net/problem=38

function pandigitalMultiples(k) {
  function getKDigitConcatenatedProduct(num, k) {
    // returns false if concatenated product is not k digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < k; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === k ? concatenatedProduct : false;
  }

  function is1toKPandigital(num, k) {
    const numStr = num.toString();

    // check if length is not k
    if (numStr.length !== k) {
      return false;
    }

    // check if pandigital
    for (let i = k; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 10 ** Math.floor(k / 2) + 1; i >= 1; i--) {
    const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
    if (is1toKPandigital(concatenatedProduct, k)) {
      const number = parseInt(concatenatedProduct, 10);
      if (number > largestNum) {
        largestNum = number;
      }
    }
  }
  return largestNum;
}