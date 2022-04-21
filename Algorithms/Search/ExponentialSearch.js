// https://www.youtube.com/watch?v=BDVYtuWXgXE

const exponentialSearch = (arr, n, e) => {
  // arr->arr, n -> arr.length, e -> element to find

  // e find at index 0
  if (arr[0] == x) return 0;

  let i = 1;
  while (i < n && arr[i] <= e) i *= 2
                                // if we go out of bound in while loop, take n-1 as high
  return binarySearch(arr, i/2, Math.min(i, n-1), e)
}
