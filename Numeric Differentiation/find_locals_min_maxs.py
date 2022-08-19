import math
import numpy as np
import matplotlib.pyplot as plt


def derivative(f, a, h=0.00001):
    return (f(a + h) - f(a))/h


def local_minimum(f, a, b):
    epsilon = 2
    x = 0
    prev_x = x
    while (True):
        dydx = derivative(f, x)
        if (dydx > 0):
            while (x - epsilon <= a):
                epsilon /= 2

            x -= epsilon
            if (derivative(f, x) < 0):
                epsilon /= 2
        else:
            if (dydx < 0):
                while (x + epsilon >= b):
                    epsilon /= 2

                x += epsilon
                if (derivative(f, x) > 0):
                    epsilon /= 2

        if (np.absolute(x - prev_x) < 0.0001):
            return x
        prev_x = x

        if ((dydx > 0.00001 and dydx < 0.0001) or dydx == 0):
            if ((derivative(f, x+epsilon*2) > 0) and (derivative(f, x-epsilon*2) < 0)):
                return x
            else:
                # f'(x) = 0 but doesn't meet the conditions of a local minimun/maximun (e.g x**2 at x=0)
                x += epsilon


def local_maximun(f, a, b):
    epsilon = 2
    x = 0
    prev_x = x
    while (True):
        dydx = derivative(f, x)
        if (dydx > 0):
            while (x + epsilon >= b):
                epsilon /= 2

            x += epsilon
            if (derivative(f, x) < 0):
                epsilon /= 2

        if (dydx < 0):
            if (x - epsilon <= a):
                epsilon /= 2

            x -= epsilon
            if (derivative(f, x) > 0):
                epsilon /= 2

        if (np.absolute(x - prev_x) < 0.0001):
            return x
        prev_x = x

        if ((dydx > 0.0000001 and dydx < 0.000001) or dydx == 0):
            if ((derivative(f, x+epsilon*2) < 0) and (derivative(f, x-epsilon*2) > 0)):
                return x
            x += epsilon


def f(x): return (x/2 * np.sqrt(36 - x**2))


a = -6
b = 6

#print('Minimun at x = '+ str(local_minimum(f, a, b)))
#print('Maximun at x = '+ str(local_maximun(f, a, b)))


x = np.linspace(a, b, 10000)
y = f(x)

dydx = derivative(f, x)

plt.figure(figsize=(12, 5))
plt.plot(x, y, label='y=f(x)')
plt.axvline(x=local_minimum(f, a, b), label='Min', color='g')
plt.axvline(x=local_maximun(f, a, b), label='Max', color='r')

plt.legend()
plt.grid(True)

plt.show()
