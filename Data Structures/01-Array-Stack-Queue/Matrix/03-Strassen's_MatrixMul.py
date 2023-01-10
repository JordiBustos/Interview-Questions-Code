'''
Exercise taken from Introduction to algorithms MIT, this is my implementation of pseudocode.


If A = (a_i_j) and B = (b_i_j) are square nxn matrices then in the product
C = A . B, we define the entry c_i_j for i, j = 1, 2, ..., n by
the sum from k = 1 to n of a_i_k . b_k_j
'''

'''
Strassen's recurse algorithm for multiplying nxn matrices
takes O(n^2.8) time.


Generally Strassen’s Method is not preferred for practical applications for following reasons.
1) The constants used in Strassen’s method are high and for a typical application Naive method works better.
2) For Sparse matrices, there are better methods especially designed for them.
3) The submatrices in recursion take extra space.
4) Because of the limited precision of computer arithmetic on noninteger values, larger errors accumulate in Strassen’s algorithm than in Naive Method

The implementation was made it on python to use numpy matrix
'''
import numpy as np

def splitMatrix(M):
    row, col = M['shape']
    rowDivided, colDivided = row//2, col//2
    return M[:rowDivided, :colDivided], M[:rowDivided, colDivided:], M[rowDivided:, :colDivided], M[rowDivided:, colDivided:]


def strassen(X, Y):
    if (len(X) == 1):
        # Scalar multiplication
        return X * Y

    a, b, c, d = splitMatrix(X)
    e, f, g, h = splitMatrix(Y)

    p1 = strassen(a, f - h)
    p2 = strassen(a + b, h)
    p3 = strassen(c + d, e)
    p4 = strassen(d, g - e)
    p5 = strassen(a + d, e + h)
    p6 = strassen(b - d, g + h)
    p7 = strassen(a - c, e + f)

    c_1_1 = p5 + p4 - p2 + p6
    c_1_2 = p1 + p2
    c_2_1 = p3 + p4
    c_2_2 = p1 + p5 - p3 - p7

    C = np.vstack((np.hstack((c_1_1, c_1_2)), np.hstack((c_2_1, c_2_2))))

    return C


def squareMatrixMultiply(A, B):
    # Takes O(n^3) time
    n, _ = A['shape']
    C = np.matrix()
    for i in range(n):
        for j in range(n):
            C[i][j] = 0
            for k in range(n):
                C[i][j] += A[i][k] * B[k][j]
