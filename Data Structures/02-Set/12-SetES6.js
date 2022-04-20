/*
Now that you have worked through ES5, you are going to perform something similar in ES6. This will be considerably easier. ES6 contains a built-in data structure Set so many of the operations you wrote by hand are now included for you. Let's take a look:

To create a new empty set:
var set = new Set();

You can create a set with a value:

var set = new Set(1);
You can create a set with an array:

var set = new Set([1, 2, 3]);
Once you have created a set, you can add the values you wish using the add method:

var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
As a reminder, a set is a data structure that cannot contain duplicate values:

var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
For this exercise, return a set with the following values: 1, 2, 3, 'Taco', 'Cat', 'Awesome'
*/

function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line
  set.add('Taco')
  set.add('Cat')
  set.add('Awesome')
  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
