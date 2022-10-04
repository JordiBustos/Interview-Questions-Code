"""
  Este script computa la longitud de una curva usando la noción de segmento 
  rectilíneo y la longitud del mismo en el plano. 
  Usando Teorema de Pitágoras sabemos que 
  la longitud de un segmento rectilíneo es la raíz cuadrada de la suma de los 
  cuadrados de sus componentes.
  Para f: [a, b] -> R derivable y cuya derivada sea continua en [a, b], tomaremos una partición P
  del intervalo de n subintervalos tq
  a = x_0 < x_1 < ... < x_n = b
  y trazaremos la poligonal determinada por los puntos (x_i, f(x_i))
  La longitud de la curva es la suma de las longitudes de los segmentos rectilíneos
"""

import numpy as np
from matplotlib import pyplot as plt

def compute_segment_longitude(x_1, y_1, x_2, y_2):
    """
    Calcula la longitud del segmento rectilíneo
    """
    return np.sqrt((x_2 - x_1)**2 + (y_2 - y_1)**2)

def compute_total_longitude(x, y):
    """
    Calcula la longitud total de la curva
    """
    total = 0
    for i in range(len(x) - 1):
        total += compute_segment_longitude(x[i], y[i], x[i + 1], y[i + 1])
    
    return total

def plot():
  a, b = 0, 5
  f = lambda x: x**3
  x = np.linspace(a, b, 100)
  y = f(x)
  longitud = compute_total_longitude(x, y)


  fig = plt.figure()
  fig.subplots_adjust(top=0.8)
  ax1 = fig.add_subplot(111)
  ax1.set_ylabel('f(x)')
  ax1.set_xlabel('x')
  ax1.set_title('Longitud de la curva en el intervalo [{}, {}]: {}'.format(a, b, longitud))
  ax1.plot(x, y, 'r')
  plt.show()


if __name__ == "__main__":
    plot()
  
# También si operamos algebraicamente podemos utilizar la derivada 