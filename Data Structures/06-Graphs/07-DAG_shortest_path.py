# assumed directed acyclic graph
from collections import defaultdict


class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
        self.V = 0

    def addEdge(self, u, v, w):
        if u in self.graph and v in self.graph:
            self.graph[u].append([v, w])
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
            # i[0] vertex, i[1] weight
            if not visited[i[0]]:
                self.__tsort_util(i[0], visited, ordering)
        ordering.append(v)

    def tsort(self):
        visited = [False] * self.V
        ordering = []

        for i in range(self.V):
            if not visited[i]:
                self.__tsort_util(i, visited, ordering)

        ordering = ordering[::-1]
        print(ordering)
        return ordering

    def dag_shortest_path(self, start):
        visited = [False] * self.V
        stack = []
        dist = [float('Inf')] * self.V
        dist[start] = 0

        for i in range(self.V):
            if not visited[i]:
                self.__tsort_util(start, visited, stack)

        while stack:
            i = stack.pop()

            for node, weight in self.graph[i]:
                if dist[node] > dist[i] + weight:
                    dist[node] = dist[i] + weight

        for i in range(self.V):
            print(("%d" % dist[i]) if dist[i] !=
                  float("Inf") else "Inf", end=" ")


if __name__ == '__main__':
    g = Graph()
    for i in range(6):
        g.addVertex(i)
    g.addEdge(0, 1, 3)
    g.addEdge(0, 2, 2)
    g.addEdge(0, 5, 3)
    g.addEdge(1, 3, 1)
    g.addEdge(1, 2, 6)
    g.addEdge(2, 3, 1)
    g.addEdge(2, 4, 10)
    g.addEdge(3, 4, 5)
    g.addEdge(5, 4, 7)

    g.dag_shortest_path(0)
