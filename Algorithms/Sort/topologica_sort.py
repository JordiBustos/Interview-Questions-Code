# assumed directed acyclic graph 

from collections import defaultdict


class Graph:
    def __init__(self, vertices):
        self.graph = defaultdict(list)
        self.V = vertices

    def addEdge(self, u, v):
        self.graph[u].append(v)


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
    g = Graph(6)
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