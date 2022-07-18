/*
Problem 26: Reciprocal cycles
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

const reciprocalCycles = (n) => {
  let seq = 0

  for (let i = n; i > 1; i--){
    if (seq >= i) break

    let remainders = [...Array(i)].map(x => 0)
    let v = 1; let p = 0;

    while (remainders[v] == 0 && v != 0){
      remainders[v] = p;
      v *= 10
      v %= i;
      p++
    }
    if (p > seq){
      seq = p
    }
  }
  return seq
}

console.log(reciprocalCycles(1000));
