/*
Let's look at the .has and .size methods available on the ES6 Set object.

First, create an ES6 Set

var set = new Set([1,2,3]);
The .has method will check if the value is contained within the set.

var hasTwo = set.has(2);
The .size method will return an integer representing the size of the Set

var howBig = set.size;
In this exercise we will pass an array and a value to the checkSet() function. Your function should create an ES6 set from the array argument. Find if the set contains the value argument. Find the size of the set. And return those two values in an array.
*/

function checkSet(arrToBeSet, checkValue){

   // Only change code below this line
   let newSet = new Set(arrToBeSet)
   let has = newSet.has(checkValue);
   let size = newSet.size;

   return [has, size];
   // Only change code above this line

}
