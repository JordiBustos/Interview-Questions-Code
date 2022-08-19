import numpy as np


def riemann_sum(f, a, b, rule="left", delta_x=.01):
    """
    f is the function
    [a, b] is the interval
    rule determines if we compute right riemann,left riemann, midpoint riemann
    rule is left by default
    delta_x is the width of the partition in the x axis, .01 by default
    returns the computed riemann sum
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

    """
    We can multiply acc by delta_x at the end because the
    sum from i to k of n * c is equal to c * the sum from i to k of n
    in particular the sum of from i = 0 to n-1 * delta_x is equal to delta_x * the sum of from i = 0 to n-1 ...
    """
    return acc * delta_x


def compute_delta_x(n, a, b):
    """
    If it's needed we can compute the number of wanted partitions
    and then pass the returned value as delta_x in riemann_sum
    [a, b] is the interval
    n is the number of partitions
    """
    return int((b-a)/n)


a = 1
b = 100
def f(x): return x**3


rule = "midpoint"

print(riemann_sum(f, a, b, rule))
