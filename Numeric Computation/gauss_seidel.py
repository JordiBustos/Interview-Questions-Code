import numpy as np

A = [[8, 3, -3], [-2, -8, 5], [3, 5, 10]]


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


if is_diag_dominant(A):
    x1 = x2 = x3 = 0
    epsilon = 0.01
    converged = False

    x_old = np.array([x1, x2, x3])

    print("Iteration results")
    print(" k,    x1,    x2,    x3 ")
    for k in range(1, 50):
        x1 = (14 - 3 * x2 + 3 * x3) / 8
        x2 = (5 + 2 * x1 - 5 * x3) / (-8)
        x3 = (-8 - 3 * x1 - 5 * x2) / (-5)
        x = np.array([x1, x2, x3])

        dx = compute_tolerance(x, x_old)

        print("%d, %.4f, %.4f, %.4f" % (k, x1, x2, x3))
        if dx < epsilon:
            converged = True
            print("Converged!")
            break

        # assign the latest x value to the old value
        x_old = x

    if not converged:
        print("Not converge, increase the # of iterations")
else:
    print("NOT diagonally dominant")
