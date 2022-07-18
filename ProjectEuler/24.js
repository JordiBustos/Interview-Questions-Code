/*
Problem 24: Lexicographic permutations
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const permutation = (arr) => {
  let k = -1
  let j = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i+1]) k = i
  }
  // last permutation
  if (k === -1) return arr

  for (let i = 0; i < arr.length; i++){
    if (arr[k] < arr[i]) j = i
  }

  // TO-DO Modularize swap
  let tmp = arr[k]
  arr[k] = arr[j]
  arr[j] = tmp

  let h = arr.length-1
  if (k+1 < h){
    k += 1
    while(k < h){
      let tmp = arr[k]
      arr[k] = arr[h]
      arr[h] = tmp

      k++; h--;

    }
  }
  return arr
}

const lexicographicPermutations = (limit) => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 1; i <= limit; i++){
    arr = permutation(arr)
  }
  let str = ''
  for (let i = 0; i < arr.length; i++){
    str += String(arr[i])
  }
  return parseInt(str)
}

console.log(lexicographicPermutations(999999))
