/*
  Given an arr, convert it to a form where all elements are in range from 0 to n-1

  arr = [10, 40, 20]
  0 is assigned to 10
  1 is assigned to 20
  2 is assigned to 40

  final output = [0, 2, 1]

  Simple method:
    Traverse arr and find the minimun element and replace it with 0
    Consider the remaining arr and in it find the minimun and replace it with 1
    ...
    O(n^2)

  Hashing and sorting approach O(n log n)
    Create tmp arr
    Copy contents of original arr to tmp O(n)

    Sort tmp in ascending order O(n logn)
    Create an empty hash table O(1)
    Traverse tmp and store mapping of numbers and their values in hash table O(n)
    Traverse given array and change elements to their position using hash table O(n)

*/


const convert = (arr, n) => {
  let tmp = [...arr].sort((a, b) => a - b);

  m = new Map()

  let val = 0;
  for (let i = 0; i < n; i++){
    m[tmp[i]] = val++;
  }

  for (let i = 0; i < n; i++){
    arr[i] = m[arr[i]]
  }
};
