/*
All of the linked lists we've created so far are singly linked lists. Here, we'll create a doubly linked list. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.

This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an additional reference to the previous node in the list.

We've provided a Node object and started our DoublyLinkedList. Let's add two methods to our doubly linked list called add and remove. The add method should add the given element to the list while the remove method should remove all occurrences of a given element in the list.

Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. Also, removing any item on an empty list should return null.
*/

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(item) {
    const newNode = new Node(data this.tail);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    [ this.tail.next, this.tail ] = [ newNode, newNode ]
  }

  remove(item) {
    if (this.head === null) return null;

    let tempNode = this.head;
    if (tempNode.data == data) {
      this.head = tempNode.next;
      tempNode = tempNode.next
    }
    let tempNodeFromLast = this.tail;

    while (tempNode.next !== tempNodeFromLast ) {
      if (tempNode.data === data) {
        if (tempNode === this.head) {
          this.head = tempNode.next;
          tempNode.next.prev = null;
        } else {
          let prevNode = tempNode.prev;
          prevNode.next = tempNode.next;
        }
      }
      if (tempNodeFromLast.data === data){
        if (tempNodeFromLast === this.tail){
          this.tail = tempNodeFromLast.prev;
          tempNodeFromLast.prev.next = null;
        } else {
          let prevNode = tempNodeFromLast.prev;
          prevNode.next = tempNodeFromLast.next;
        }
      }
      tempNode = tempNode.next;
      tempNodeFromLast = tempNodeFromLast.next;
    }
    if (tempNode.data === data) {
      this.tail = tempNode.prev;
      tempNode.prev.next = null;
    }
  }
}
