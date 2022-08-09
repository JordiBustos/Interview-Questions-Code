/*
Find the Minimum and Maximum Value in a Binary Search Tree
In this challenge you will define two methods, findMin and findMax. These methods should return the minimum and maximum value held in the binary search tree (don't worry about adding values to the tree for now, we have added some in the background). If you get stuck, reflect on the invariant that must be true for binary search trees: each left subtree is less than or equal to its parent and each right subtree is greater than or equal to its parent. Let's also say that our tree can only store integer values. If the tree is empty, either method should return null.
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
    this.findMin = () => {
      if (!this.root) return null;
      let current = this.root;
      while (current.left) {
        current = current.left;
      }
      return current.value;
    };

    this.findMax = () => {
      if (!this.root) return null;
      let current = this.root;
      while (current.right) {
        current = current.right;
      }
      return current.value;
    };
    // Only change code above this line
  }
}
