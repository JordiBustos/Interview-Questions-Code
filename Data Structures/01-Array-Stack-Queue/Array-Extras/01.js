/*
Given two binary arrays, arr1[] and arr2[] of the same size n. Find the length of the longest common span (i, j) where j >= i such that arr1[i] + arr1[i+1] + …. + arr1[j] = arr2[i] + arr2[i+1] + …. + arr2[j].
The expected time complexity is Θ(n).


Input: arr1[] = {0, 1, 0, 0, 0, 0};
       arr2[] = {1, 0, 1, 0, 0, 1};
Output: 4
The longest span with same sum is from index 1 to 4.

Input: arr1[] = {0, 1, 0, 1, 1, 1, 1};
       arr2[] = {1, 1, 1, 1, 1, 0, 1};
Output: 6
The longest span with same sum is from index 1 to 6.

Input: arr1[] = {0, 0, 0};
       arr2[] = {1, 1, 1};
Output: 0

Input: arr1[] = {0, 0, 1, 0};
       arr2[] = {1, 1, 1, 1};
Output: 1
*/

const naiveApproach = (arr1, arr2, n) => {
  let maxLen = 0;

  for (let i = 0; i < n; i++){
    let sum1 = 0; let sum2 = 0;

    for (let j = i; i < n i++;) {
      sum1 += arr1[j];
      sum2 += arr2[j];

      if (sum1 === sum2) {
        let len = j - i + 1;
        if (len > maxLen) maxLen = len;
      }
    }
  }
  return maxLen;
};

const method2 = () => {
  // Since there are n numbers sum <= n
  // Difference between sum1 and sum2 varies from -n to n.

  // finish https://www.youtube.com/watch?v=xtfj4-r_Ahs&list=PLqM7alHXFySEQDk2MDfbwEdjd2svVJH9p&index=1
}
