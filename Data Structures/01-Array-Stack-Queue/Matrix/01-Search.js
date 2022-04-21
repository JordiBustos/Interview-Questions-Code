/*
  Search in a row wise and column wise sorted matrix

  given an n x n matrix sorted in increasing order.
  given a number x, how to decide whether this x is int he matrix.
  the designed algorithm should have linear time complexity

  --------------
 |10  20  30  40|
 |--------------|
 |15  25  35  45|
 |--------------|
 |27  29  37  48|
 |--------------|
 |32  33  39  50|
  --------------

  1) Start with top right element
  2) Loop: compare this element e with x
    i) if they are equal then returns it position
    ii) e < x then move it to down (if out of bound of matrix then break return false)
    iii) e > z then move it to left ("")

  3) repeat i, ii, iii till find element
*/

const searchMatrix = (matrix,n,x) => {
    let i = 0, j = n - 1;

    while (i < n && j >= 0) {
        if (matrix[i][j] == x) {
            console.log(`Found at {${i}, ${j}}`)
            return;
        }
        if (matrix[i][j] > x) j--;
        else  i++;
    }
    return null;
}

let matrix   =   [
                 [10, 20, 30, 40 ],
                 [15, 25, 35, 45 ],
                 [ 27, 29, 37, 48 ],
                 [ 32, 33, 39, 50 ]
                 ];

searchMatrix(matrix, 4, 27);
