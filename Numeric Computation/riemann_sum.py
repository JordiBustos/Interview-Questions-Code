import numpy as np


def riemann_sum(f, a, b, rule="left", delta_x=.01):
    """
    f is the function.
    [a, b] is the interval.
    rule determines if we compute right, left, midpoint riemann sum. Left by default.
    delta_x is the width of the partition on the x axis, .01 by default.
    """
    acc = 0
    # arange creates an array of evenly spaced numbers between [a, b)
    partition = np.arange(a, b+1, delta_x)
    n = len(partition)
    if rule == "left":
        for i in partition:
            acc += f(i)

    elif rule == "midpoint":
        for i in range(n-1):
            midpoint = (partition[i] + partition[i+1]) / 2
            acc += f(midpoint)
    else:
        for i in range(n-1):
            acc += f(partition[i+1])

    # We can multiply acc by delta_x at the end because the width of the partition is the same for all x_i
    return acc * delta_x


def compute_with_unequal_partition(f, delta_x):
    """
    Here delta_x is an array [a, x_i, x_i+1, ..., b] and the distance between each x_j is delta_x[i+1] - delta_x[i]
    can be different for each x_i :)
    delta_x[0] must be equal to a
    delta_x[len(delta_x)-1] must be equal to b
    """
    acc = 0
    n = len(delta_x)

    for i in range(n-1):
        width = delta_x[i+1] - delta_x[i]
        acc += f(delta_x[i]) * width

    # f(delta_x[i+1]) for right sum
    # f((delta_x[i] + delta_x[i+1]) / 2) for midpoint sum
    return acc


def compute_partition(n, a, b):
    """
    If it's needed we can compute the number of wanted partitions
    and then pass the returned value as delta_x in riemann_sum
    [a, b] is the interval
    n is the number of partitions
    """
    return int((b-a)/n)


if __name__ == "__main__":
    a = 1
    b = 100
    def f(x): return x**3

    rule = "midpoint"
    print(riemann_sum(f, a, b, rule))
