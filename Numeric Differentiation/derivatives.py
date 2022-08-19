import numpy as np
import matplotlib.pyplot as plt
import math


def derivative(f, a, h=0.00001):
    '''
    Compute the difference formula for f'(a) with step size h.
    Limit when h goes to 0 of (f(a+h) - f(h))/h
    Parameters
    ----------
    f : function
        Vectorized function of one variable
    a : number
        Compute derivative at x = a
    h : number
        Step size in difference formula

    Returns -> float
    '''
    return (f(a + h) - f(a))/h


def higher_derivative(f, a, n, h=0.0001):
    '''
    Using newton's difference quotient 
    the following is valid for n > 0
    -------
    f : function

    a : number
        Compute derivative at x = a

    h : number
        Step size

    Returns -> float
    '''
    if (n <= 0):
        return 'n must be greater than 0'
    sigma = 0
    for k in range(n+1):
        first_term = (-1)**(k+n)
        second_term = f(a + k*h)
        combinatorial_number = math.factorial(
            n) / (math.factorial(n-k) * math.factorial(k))

        sigma += (first_term * second_term * combinatorial_number)

    return sigma / (h**n)


#               The first two parameters of linspace are the domain of f
x = np.linspace(-10, 10, 10000)
def f(x): return (x**4)


dydx = derivative(f, x)

dydx_2 = higher_derivative(f, x, 3)

plt.figure(figsize=(12, 5))
plt.plot(x, f(x), label='y=f(x)')
#plt.plot(x, dydx,label="Computed f'(x)")
plt.plot(x, dydx_2, label='nth derivative')
plt.legend()
plt.grid(True)

plt.show()
