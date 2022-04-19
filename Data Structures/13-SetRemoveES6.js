/*
Let's practice removing items from an ES6 Set using the delete method.

First, create an ES6 Set:

var set = new Set([1,2,3]);
Now remove an item from your Set with the delete method.

set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
Now, create a set with the integers 1, 2, 3, 4, & 5.

Remove the values 2 and 5, and then return the set.
*/

function checkSet(){
  // Only change code below this line
  var set = new Set([1, 2, 3, 4, 5]);

  set.delete(2)
  set.delete(5)
  // Only change code above this line
  return set;
}
