import numpy as np

A = [[8, 3, -3], [-2, -8, 5], [3, 5, 10]]
b = [14, 5, -8]


def create_linear_equations(A, b):
    n = len(b)
    equations = []

    for i in range(n):
        equation = (
            lambda x, i=i: (b[i] - sum(A[i][j] * x[j] for j in range(n) if j != i))
            / A[i][i]
        )
        equations.append(equation)

    return equations


def find_diagonal_coeff(A):
    return np.diag(np.abs(A))


def compute_sum_without_diag(A, D):
    return np.sum(np.abs(A), axis=1) - D


def compute_tolerance(x_new, x_old):
    return np.sqrt(np.dot(x_new - x_old, x_new - x_old))


def is_diag_dominant(A):
    diag = find_diagonal_coeff(A)
    off_diag = compute_sum_without_diag(A, diag)
    return np.all(diag > off_diag)


if is_diag_dominant(A) and len(A) == len(b):
    epsilon = 0.01
    converged = False

    x_old = np.zeros(len(b))
    x = np.zeros(len(b))
    equations = create_linear_equations(A, b)

    for k in range(1, 50):
        for i in range(len(equations)):
            x[i] = equations[i](x)
        dx = compute_tolerance(x, x_old)

        print("%d," % k + ",".join([f" %.4f" % x[i] for i in range(len(b))]))
        if dx < epsilon:
            converged = True
            print("Converged!")
            break

        x_old = np.copy(x)

    if not converged:
        print("Not converge, increase the # of iterations")
else:
    print("NOT diagonally dominant")
