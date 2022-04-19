/*
Do you remember the ES6 spread operator ...?

... can take iterable objects in ES6 and turn them into arrays.

Let's create a Set, and check out the spread function.

var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
In this exercise we will pass a set object to the checkSet function. It should return an array containing the values of the Set.

Now you've successfully learned how to use the ES6 Set() object, good job!
*/

function checkSet(set){
   // Only change code below this line
   return [...set]
   // Only change code above this line
}
