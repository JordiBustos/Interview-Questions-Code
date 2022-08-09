class Tree {
    constructor () {
        this.root = null;
    }
    add(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.root.add(value);
        }
    }
    toObject() {
        return this.root;
    }
}

class Node {
    constructor (value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.height = 1;
    }
    add(value) {
        // decide to go left or right
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new Node(value);
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1;
            }
        } else {
            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new Node(value);
            }
            if (!this.left || this.right.height > this.left.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }
    balance() {
        const rightHeight = this.right ? this.right.height : 0;
        const leftHeight = this.left ? this.left.height : 0;

        if (leftHeight > rightHeight + 1) {
            const leftRightHeight = this.left.right ? this.left.right.height : 0;
            const leftLeftHeight = this.left.left ? this.left.left : 0;
        
            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateRR();
            }
            this.rotateLL();
        } else if (rightHeight > leftHeight + 1) {
            const rightRightHeight = this.right.right ? this.right.right.height : 0;
            const rightLeftHeight = this.right.left? this.right.left.height : 0;

            if (rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }
            this.rotateRR();    
        }
    }
    rotateRR() {
        const valueBefore = this.value;
        const leftBefore = this.left
        this.value = this.right.value;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.value = valueBefore;

        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;

        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if (!this.right && !this.left) {
            this.height = 1;
        } else if (!this.right || (this.left && this.right.height < this.left.height)) {
            this.height = this.left.height + 1;
        } else {
            this.height = this.right.height + 1;
        }
    }
}

/*
5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
(in this case they're both null)
-> make node A's _original_ left child
(which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
    /   \
   5     9
node B   node C
*/

/* 
55 - node A
 \
  8 - node B
 /
7 - node C

[ ... previous steps ]
-> check balance of node A: left height is 0, right height is 2
unbalanced - right heavy, child is left heavy
-> perform left rotation on left heavy right child node B

5 - node A
 \
  7 - node B
   \
    8 - node C

-> now perform right rotation on node A

      7 - node A
    /   \
   5     8
node B   node C
*/