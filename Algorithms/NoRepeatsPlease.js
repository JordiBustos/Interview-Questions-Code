/*
Return the number of total permutations of the provided string that don't have repeated
consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
don't have the same letter (in this case a) repeating.
*/

const permAlone(str) => {
  const regex = /(.)\1+/;
  const arr = str.split("");
  const permutations = [];

  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  const swap = (index1, index2) => {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  const generate = n => {
    if (n === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
      return;
    }
    for (let i = 0; i != n; ++i) {
      generate(n - 1);
      swap(n % 2 ? 0 : i, n - 1);
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter((string) => {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

permAlone('aab');


/*
      WIKIPEDIA IMPLEMENTATION ON JS



const getPermutations = arr => {
  const output = [];

  const swap = (arrSwaped, n, k) => {
    const tmp = arrSwaped[n];
    arrSwaped[n] = arrSwaped[k];
    arrSwaped[k] = tmp;
  }

  const generate = (n, heapArr) => {
    if (n === 1){
    output.push(heapArr.slice());
    return;
  }
  generate(n-1, heapArr);

  for(let i = 0; i < n - 1; i++){
    if (n%2 === 0) {
      swap(heapArr, i, n-1);
    } else{
      swap(heapArr, 0, n-1);
    }
    generate(n-1, heapArr);
  }
}

generate(arr.length, arr.slice());
return output;
}
*/
