// https://projecteuler.net/problem=33

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function digitCancellingFractions() {
  let numerator = 1;
  let denominator = 1;
  
  const update = () => {
    numerator *= i;
    denominator *= j;
  }

  for (let i = 10; i < 100; i++) {
    for (let j = i + 1; j < 100; j++) {
      if (i % 10 === 0 && j % 10 === 0) continue; // trivial case
      const iStr = i.toString();
      const jStr = j.toString();
      if (iStr[0] === jStr[0]) {
        if (i / j === iStr[1] / jStr[1]) {
          update()
        }
      } else if (iStr[0] === jStr[1]) {
        if (i / j === iStr[1] / jStr[0]) {
          update() 
        }
      } else if (iStr[1] === jStr[0]) {
        if (i / j === iStr[0] / jStr[1]) {
          update()
        }
      } else if (iStr[1] === jStr[1]) {
        if (i / j === iStr[0] / jStr[0]) {
          update()
        }
      }
    }
  }
  return denominator / gcd(numerator, denominator);
}

console.log(digitCancellingFractions());