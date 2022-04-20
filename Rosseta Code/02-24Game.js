/*
The 24 Game tests a person's mental arithmetic.

The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

Rules:

Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
Division should use floating point or rational arithmetic, etc, to preserve remainders.
Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
The order of the digits when given does not have to be preserved.

Example input	    Example output
solve24("4878");	(7-8/8)*4
solve24("1234");	3*1*4*2
solve24("6789");	(6*8)/(9-7)
solve24("1127");	(1+7)*(2+1)
*/

// This solves the 24game returning true or false

let judgePoint24 = A => {
    let permutations = A => {
        if (A.length == 1)
            return A;
        return A.reduce((res, x, i, A, B = [...A]) => {
            B.splice(i, 1); // B is A without A[i] (ie. x)
            return res.concat(permutations(B).map(a => [].concat(x, a))); // recursively insert x into all other positions
        }, []);
    };
    let go = (a, b, c, d, ok = false) => {
        if (a && b && c && d)
            return go(a + b, c, d) || go(a - b, c, d) || go(a * b, c, d) || (b && go(a / b, c, d)) ||
                   go(a, b + c, d) || go(a, b - c, d) || go(a, b * c, d) || (c && go(a, b / c, d)) ||
                   go(a, b, c + d) || go(a, b, c - d) || go(a, b, c * d) || (d && go(a, b, c / d));
        else if (a && b && c)
            return go(a + b, c) || go(a - b, c) || go(a * b, c) || (b && go(a / b, c)) ||
                   go(a, b + c) || go(a, b - c) || go(a, b * c) || (c && go(a, b / c));
        else if (a && b)
            return go(a + b) || go(a - b) || go(a * b) || (b && go(a / b));
        else
            return Math.abs(24 - a) < 0.0001; // epsilon
    };
    for (let x of permutations(A))
        if (go(...x))
            return true;
    return false;
};
