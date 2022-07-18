/*
What is the index of the first term in the Fibonacci sequence to contain n digits?
*/

const digitFibonacci = (n) => {
  if (n === 1) return 1
  let fibo = [1, 1]
  let i = 1

  while (String(fibo[i]).length < n){
    i += 1
    fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return i+1;
}
digitFibonacci(20);
