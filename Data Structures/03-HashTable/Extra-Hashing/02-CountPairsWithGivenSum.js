/*
  arr = [1, 5, 7, -1]
  sum = 6;

  (1, 6) Y
  (1, 7) N
  (1, -1) N
  (7, -1) Y
  ...

Output 2: # of Y

Naive solution:
  Traverse each element and check if there's another number in the arr which can be added to it give 'sum'

O(n) solution is possible
Create a map of frequency of each number in the arr
Single traversal of the arr.

In the next traversal, for every element check if it can bew combined with any other element to give the desired sum
if so, count++
then we'd have twice the required value stored in count. Hence divide count by 2 and return
*/

const naiveApproach = (arr, n, sum) => {
  // Time complexity O(n^2)
  let count = 0;

  for (let i = 0; i<n; i++){
    for (let j=i+1; j<n; j++){
      if (arr[i] + arr[j] === sum) count++
    }
  }
  return count;
}

const betterApproach = (arr, n, sum) => {
  m = new Map();

  for (let i = 0; i < n; i++){
    // initialize in 0 at arr[i] position
    if (!m.has(arr[i])) m.set(arr[i], 0)

    // sum 1
    m.set(arr[i], m.get(arr[i]) + 1)
  }

  let twiceCount = 0;

  for (let i = 0; i < n; i++){
    if (m.get(sum - arr[i]) !== null) {
      twice_count += m.get(sum - arr[i])
    }

    if (sum - arr[i] === arr[i]) twiceCount--;
  }

  return twiceCount/2;
};

console.log(betterApproach([1, 5, 7, -1], 4, 6))
