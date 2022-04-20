/*
Compare and update the inventory stored in a 2D array against a second 2D array
of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/

const updateInventory = (arr1, arr2) => {
  let index;
  let namesInCurrentArr = [];
  let namesInNewArr = [];
  var firstTime = true

  arr1.forEach((item) => {
    arr2.forEach((item2) => {
      if (item[1] === item2[1]){
        item[0] += item2[0];
      }
      if (firstTime){
        namesInNewArr.push(item2[1]);
      }
    });
    firstTime = false;
    namesInCurrentArr.push(item[1]);
  });
  if (arr1.length === 0){
    arr2.forEach((item) => {
      namesInNewArr.push(item[1]);
    });
  }

  namesInNewArr.forEach((item) => {
    if (namesInCurrentArr.indexOf(item) === -1){
      index = namesInNewArr.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  arr1.sort(function(currItem, nextItem) {
    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  console.log(arr1)
  return arr1;
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])
