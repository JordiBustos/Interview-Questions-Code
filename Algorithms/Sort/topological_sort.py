# assumed directed acyclic graph 
from collections import defaultdict


class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
        self.V = 0

    def addEdge(self, u, v):
        if u in self.graph and v in self.graph:
            self.graph[u].append(v)
        else:
            print('you should add the vertices first')

    def addVertex(self, v):
        if v not in self.graph:
            self.graph[v] = []
            self.V += 1
        else: 
            print('Vertex {} already in graph'.format(v))

    def adjustNoVertices(self, n):
        self.V += n

    def __tsort_util(self, v, visited, ordering):
        visited[v] = True

        for i in self.graph[v]:
            if not visited[i]:
                self.__tsort_util(i, visited, ordering)
        ordering.append(v)

    def tsort(self):
        visited = [False] * self.V
        ordering = []

        for i in range(self.V):
            if not visited[i]:
                self.__tsort_util(i, visited, ordering)
        
        print(ordering[::-1])

if __name__ == '__main__':
    g = Graph()
    for i in range(6):
        g.addVertex(i)
    g.addEdge(0, 1)
    g.addEdge(1, 5)
    g.addEdge(1, 3)
    g.addEdge(1, 2)
    g.addEdge(1, 4)
    g.addEdge(2, 4)
    g.addEdge(3, 4)
    g.addEdge(3, 5)
    g.addEdge(4, 5)
 
    g.tsort()