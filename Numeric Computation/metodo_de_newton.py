def metodo_de_newton(f, d, p0, tol, N):
    for _ in range(N):
      df = d(f, p0)
      if df == 0: 
        return None
      p = p0 - f(p0)/df
      if (abs(p - p0) < tol):
        return p
      p0 = p
    return None

def d(f, a, h=0.00001):
  return (f(a + h) - f(a))/h

def f(x):
  return x**3 - 3*x + 1

print(metodo_de_newton(f, derivada, 1, 0.0001, 100))
