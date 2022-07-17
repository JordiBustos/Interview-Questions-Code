'''
Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
'''

def sumSquareDifference(n):
    sumSquared = (n * (n+1) * (2*n+1))/6
    sumNormal = (n * (n+1))/2

    return (sumNormal ** 2) - sumSquared

sumSquareDifference(100)
