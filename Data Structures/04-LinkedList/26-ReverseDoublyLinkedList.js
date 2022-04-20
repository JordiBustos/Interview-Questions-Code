/*
Let's create one more method for our doubly linked list called reverse which reverses the list in place. Once the method is executed the head should point to the previous tail and the tail should point to the previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. Trying to reverse an empty list should return null.
*/

var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.reverse = () => {
    let tmp = null;
    let currentNode = this.head;

    if (this.head === null) {
      return null;
    }

    this.tail = currentNode;

    while (currentNode) {
      tmp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = tmp;
      currentNode = currentNode.prev;
    }

    if (tmp != null) {
      this.head = tmp.prev;
    }
  }
  // Only change code above this line
};
