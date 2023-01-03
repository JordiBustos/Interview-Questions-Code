def transpose_graph(adj_matrix, adj_matrix_to_transpose, v):
    '''
        v is the number of vertexes in the graph
        adj_matrix is the adjacency matrix of the graph
        adj_matrix_to_transpose is the adjacency matrix of the graph to be transposed already initialized with 0s
    '''
    for i in range(v):
        for j in range(len(adj_matrix[i])):
            if adj_matrix[i][j] != 0:
                adj_matrix_to_transpose[j][i] = adj_matrix[i][j]