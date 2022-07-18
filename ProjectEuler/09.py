'''
Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
'''
def specialPythagoreanTriplet(n):
    sumOfabc = n
    a = 1
    while (a < n):
        b = a+1
        while (b < n):
            c = n - a - b
            if (c > 0):
                if (c ** 2 == (a** 2 + b ** 2)):
                    return a * b * c
            b+=1
        a+=1

print(specialPythagoreanTriplet(1000))
