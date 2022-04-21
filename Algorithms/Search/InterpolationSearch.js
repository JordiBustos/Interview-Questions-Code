const interpolationSearch = (arr, lo, hi, x) => {
  let pos;

  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    // Formula derived from line equation
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));;
    // Condition of target found
    if (arr[pos] == x) return pos;

    if (arr[pos] < x) return interpolationSearch(arr, pos + 1, hi, x);

    if (arr[pos] > x) return interpolationSearch(arr, lo, pos - 1, x);
    }
    // Not found
    return -1;
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21,
           22, 23, 24, 33, 35, 42, 47];


// Element to be searched
let x = 18
let index = interpolationSearch(arr, 0, arr.length - 1, x);
