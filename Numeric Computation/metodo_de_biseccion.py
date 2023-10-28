import matplotlib.pyplot as plt
from numpy import sign

def metodo_de_biseccion(f, a, b, N, TOL):
    rangea = a
    rangeb = b
    for _ in range(1, N+1):
        p = a + (b - a) / 2.0
        graficar_aproximacion(f, p, rangea, rangeb)
        if (f(p) < 0.01 and f(p) > -0.01) or abs(a - b) / 2.0 < TOL:
            return p
        elif sign(f(a)) * sign(f(p)) < 0:
            b = p
        else:
            a = p
    return None

def graficar_aproximacion(f, p, a, b):
    '''
      Grafica la función f(x) en el intervalo [a, b] y marca el punto p que es el punto medio en la respectiva iteración.
    '''
    x = range(a-10, b+10)
    y = [f(i) for i in x]
    plt.plot(x, y)
    plt.plot(p, f(p), 'ro')
    plt.show()

print(metodo_de_biseccion(lambda x: x**3 + 4 * x**2 - 10, -20, 20, 100, 0.0001))
