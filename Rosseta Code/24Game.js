// This solves the 24game returning true or false if solution exists

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

judgePoint24([4, 8, 7, 8])
