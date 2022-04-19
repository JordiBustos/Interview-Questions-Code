/*
Another common data structure you'll run into in computer science is the linked list. A linked list is a linear collection of data elements, called 'nodes', each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

Imagine that you are in a conga line. You have your hands on the next person in the line, and the person behind you has their hands on you. You can see the person straight ahead of you, but they are blocking the view of the other people ahead in line. A node is just like a person in a conga line: they know who they are and they can only see the next person in line, but they are not aware of the other people ahead or behind them.

In our code editor, we've created two nodes, Kitten and Puppy, and we've manually connected the Kitten node to the Puppy node.

Create a Cat and Dog node and manually add them to the line.
*/

var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line

var Cat = new Node('Cat');
Puppy.next = Cat;

var Dog = new Node('Dog');

Cat.next = Dog;
