class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self, value):
        self.root = Node(value)

    def breadth_first_traverse(self, queue, array):
        if (len(queue) == 0): return array

        node = queue.pop(0)
        array.append(node.value)
        
        if (node.left != None):
            queue.append(node.left)
        if (node.right != None):
            queue.append(node.right)
        
        return self.bread_first_traverse(queue, array)