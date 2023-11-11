import numpy as np

def cholesky(A):
    '''
    pseudo code taken from Richard Burden Numerical Analysis 10th edition
    input: A is a symmetric positive definite matrix
    output: L and L transpose sucht that A = L*L^T    
    '''
    n = len(A)
    l11 = np.sqrt(A[0, 0])
    L = np.zeros((n, n))
    L[0, 0] = l11
    for j in range(1, n):
        L[j, 0] = A[j, 0] / l11

    for i in range(1, n):
        lii = np.sqrt(A[i, i] - np.sum(L[i, 0:i] ** 2))
        L[i, i] = lii
        for j in range(i + 1, n):
            L[j, i] = (A[j, i] - np.sum(L[j, 0:i] * L[i, 0:i])) / lii

    return [L, np.transpose(L)]


A = np.array([[4, 12, -16], [12, 37, -43], [-16, -43, 98]])
[L, LT] = cholesky(A)
print('L = ', L)
print('LT = ', LT)
