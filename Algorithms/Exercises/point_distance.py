import math

def d(x_1, y_1):
    return lambda a, b : math.sqrt((a - x_1)**2 + (b - y_1)**2)

distance_to_5_2 = d(5, 2)

print(distance_to_5_2(7, 10))