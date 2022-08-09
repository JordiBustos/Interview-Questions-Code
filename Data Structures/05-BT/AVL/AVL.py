class Node(object):
    """Node object"""

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

class AVL(object):
    def orderTree(self, root):
        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))

        balance = self.getBalance(root)

        if balance > 1 and self.key < root.left.val:
            return self.rightRotate(root)

        if balance < -1 and self.key > root.right.val:
            return self.leftRotate(root)

        if balance > 1 and self.key > root.left.val:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)

        if balance < 1 and self.key < root.right.val:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)
        return root

    def insert(self, root, key):
        if not root:
            return Node(key)
        elif key < root.val:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        return self.orderTree(root)

    def delete(self, root, key):
        if not root:
            return root
        elif key < root.val:
            root.left = self.delete(root.left, key)
        elif key > root.val:
            root.right = self.detele(root.right, key)

        else:
            if root.left is None:
                tmp = root.right
                root = None
                return tmp
            elif root.right is None:
                tmp = root.left
                root = None
                return tmp

            tmp = self.getMinValueNode(root.right)
            root.val = tmp.val
            root.right = self.delete(root.right, tmp.val)

        if root is None:
            return root

        return self.orderTree(root)


    def leftRotate(self, z):
        y = z.right
        tmp = y.left

        y.left = z
        z.right = tmp

        # Perform rotation
        y.left = z
        z.right = tmp

        # Update heights
        z.height = 1 + max(self.getHeight(z.left), self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))

        # Return the new root
        return y


    def rightRotate(self, z):
        y = z.left
        tmp = y.right

        y.right = z
        z.left = tmp

        # Update heights
        z.height = 1 + max(self.getHeight(z.left),
                        self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left),
                        self.getHeight(y.right))

        # Return the new root
        return y

    def getHeight(self, root):
        if not root:
            return 0

        return root.height

    def getBalance(self, root):
        if not root:
            return 0

        return self.getHeight(root.left) - self.getHeight(root.right)

    def getMinValueNode(self, root):
        if root is None or root.left is None:
            return root

        return self.getMinValueNode(root.left)

    def preOrder(self, root):
        if not root:
            return

        print("{0}".format(root.val))
        self.preOrder(root.left)
        self.preOrder(root.right)


myTree = AVL()
root = None

root = myTree.insert(root, 10)
root = myTree.insert(root, 20)
root = myTree.insert(root, 30)
root = myTree.insert(root, 40)
root = myTree.insert(root, 50)
root = myTree.insert(root, 25)

myTree.preOrder(root)
print()
