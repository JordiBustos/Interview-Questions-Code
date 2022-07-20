/*
Problem 27: Quadratic primes
Euler discovered the remarkable quadratic formula:

n^2 + n + 41
It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39 . However, when  n=40,40^2+40+41=40(40+1)+41  is divisible by 41, and certainly when  n=41,41^2+41+41  is clearly divisible by 41.

The incredible formula  n^2 − 79n + 1601  was discovered, which produces 80 primes for the consecutive values  0≤n≤79 . The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n^2 + an + b , where  |a| < range  and  |b| ≤ range
where |n| is the modulus/absolute value of  n
e.g.  |11| = 11  and |−4| = 4
Find the product of the coefficients,  a  and  b , for the quadratic expression that produces the maximum number of primes for consecutive values of  n , starting with  n=0 .
*/

const quadraticPrimes = (range) => {
  const isPrime = (n) => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;
    return n > 1;
  }

  let maxProduct = 1
  let maxPrimes = 0

  for (let a = (-range + 1); a < range; a++){
    for (let b = -range; b <= range; b++){
      const computeQ = (n) => Math.pow(n, 2) +  n * a + b
      let n = 0
      let currPrimes = 0

      let q = computeQ(n)

      while(isPrime(q)){
        currPrimes += 1
        n += 1
        q = computeQ(n)
      }
      if (currPrimes > maxPrimes){
        maxPrimes = currPrimes
        maxProduct = a*b
      }
    }
  }


  return maxProduct;
}

console.log(quadraticPrimes(1000));
