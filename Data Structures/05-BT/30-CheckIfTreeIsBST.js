/*
Check if Tree is Binary Search Tree
Since you already know what a binary search tree is, this challenge will establish how it is you can tell that a tree is a binary search tree or not.

The main distinction of a binary search tree is that the nodes are ordered in an organized fashion. Nodes have at most 2 child nodes (placed to the right and/or left) based on if the child node's value is greater than or equal to (right) or less than (left) the parent node.

In this challenge, you will create a utility for your tree. Write a JavaScript method isBinarySearchTree which takes a tree as an input and returns a boolean value for whether the tree is a binary search tree or not. Use recursion whenever possible.
*/

var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  if (!tree.root) return true;

  const isBadDirection = (node, direction) => {
    if (!node[direction]) return false;
    // direction is bad if
    //     1) node values are out of order
    return (direction === "left"
             ? (node.value <= node.left.value)
             : (node.value >= node.right.value)) ||
     // OR 2) the sub-tree in that direction is bad
             !isGoodTree(node[direction])
  }

  const isGoodTree = (node) => {
    if (isBadDirection(node, "left")) return false;
    if (isBadDirection(node, "right")) return false;
    return true;
  }

  return isGoodTree(tree.root);
  // Only change code above this line
}
