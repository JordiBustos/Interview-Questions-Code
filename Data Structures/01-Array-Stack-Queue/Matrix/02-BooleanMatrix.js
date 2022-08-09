/*
  Given a binary matrix, print all unique rows of the given matrix

  Input:
    [0, 1, 0, 0, 1]
    [1, 0, 1, 1, 0]
    [0, 1, 0, 0, 1]
    [1, 1, 1, 0, 0]

  Output:
    [0, 1, 0, 0, 1]
    [1, 0, 1, 1, 0]
    [1, 1, 1, 0, 0]
*/

const createDecimalMatrix = (arr, row, col) => {
  const binaryToDecimal = (arr) => {
    let value = 0;
    arr = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) value += Math.pow(2, i);
    }
    return value;
  };

  let m = new Map();
  for (let i = 0; i < row; i++) {
    const decimalValue = binaryToDecimal(arr[i]);
    if (!m[decimalValue]) {
      m[decimalValue] = arr[i];
    }
  }
  console.log(m.values);
};

const createStringMatrix = (arr, row, col) => {
  let set = new Set();
  for (let i = 0; i < row; i++) {
    let s = "";

    for (let j = 0; j < col; j++) {
      s += arr[i][j].toString();
    }
    if (!set.has(s)) {
      set.add(s);
      console.log(s);
    }
  }
};

let arr = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0],
];
//createStringMatrix(arr, 4, 5);

createDecimalMatrix(arr, 4, 5);
