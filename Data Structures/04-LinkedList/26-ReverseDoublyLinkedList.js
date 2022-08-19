/*
Let's create one more method for our doubly linked list called reverse which reverses the list in place. Once the method is executed the head should point to the previous tail and the tail should point to the previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. Trying to reverse an empty list should return null.
*/

class Node {
  constructor (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
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
        /*
        N ->  A  ->   B  -> C  ->  D
            currentNode
        tmp = N
        1) B -> A -> N -> C -> D
                cN
  
        2) El puntero next de B continúa siendo C ya que eso no fue modificado
          C -> B -> A -> N -> D
          cN
        3) Lo mismo aplica para D.
          D -> C -> B -> A -> N
          cN
        */
        tmp = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = tmp;
        currentNode = currentNode.prev;
      }

      if (tmp != null) {
        this.head = tmp.prev;
      }
    };
    // Only change code above this line
  }
}
