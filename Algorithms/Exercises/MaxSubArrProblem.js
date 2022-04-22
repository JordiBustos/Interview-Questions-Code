/*
  Exercise taken from "Introduction to Algorithms" of MIT.
*/

// Divide and Conquer algorith
const findMaxCrossingSubarr = (arr, low, mid, high) => {
  // subarr[low..high] contains n entries (so that n = high - low + 1)
  // This takes O(n) time because
  // Sum of the two for loops iterations:
  // (mid - low + 1) + (high - mid) = high - low + 1 = n

  let leftSum = -Math.pow(2, 53) - 1;
  let sum = 0;
  let maxLeft;
  // Middle of arr, to low part
  for (i = mid; i >= low; i--){
    sum += arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  let rightSum = -Math.pow(2, 53) - 1;
  sum = 0;
  let maxRight;
  for (j = mid + 1; i < high){
    sum += arr[j]
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return (maxLeft, maxRight, leftSum+rightSum);
}

const findMaxSubArr = (arr, low, high) => {
  // recursive base case
  if (high === low) return (low, high, arr[low]);
  else
  {
      mid = Math.floor((low + high) / 2);
      let leftLow, leftHigh, leftSum = findMaxSubArr(arr, low, mid);
      let rightLow, rightHigh, rightSum = findMaxSubArr(arr, mid + 1, high);
      let crossLow, crossHigh, crossSum = findMaxCrossingSubarr(arr, low, mid, high);

      if (leftSum >= rightSum && leftSum >= crossSum) return (leftLow, leftHigh, leftSum);
      else if (rightSum >= leftSum && rightSum >= crossSum) return (rightLow, rightHigh, rightSum);
      else return (crossLow, crossHigh, crossSum);
  }

}
