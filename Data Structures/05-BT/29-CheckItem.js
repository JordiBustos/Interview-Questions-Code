/*
Now that we have a general sense of what a binary search tree is let's talk about it in a little more detail. Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this? Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case. Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: 10, 12, 17, 25. Following our rules for a binary search tree, we will add 12 to the right of 10, 17 to the right of this, and 25 to the right of this. Now our tree resembles a linked list and traversing it to find 25 would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is unbalanced. We'll look a little more into what this means in the following challenges.

In this challenge, we will create a utility for our tree. Write a method isPresent which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.
*/

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    // Only change code below this line
    this.isPresent = (value, node = this.root) => {
      if (!this.root) return false;
      if (node.value === value) return true;

      if (node.value > value) {
        if (node.left === null) return false;
        return this.isPresent(value, node.left);
      } else {
        if (node.right === null) return false;
        return this.isPresent(value, node.right);
      }
    };
    // Only change code above this line
  }
}
