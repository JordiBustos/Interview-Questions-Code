def diff_polynomials(f):
    '''
    Input type:
        f -> e.g 3x^3 + 2x^2 + x
        returns -> 9x^2 + 4x + 1
    The derivative of f(x) = ax^n is f'(x) = a*n*x^(n-1)
    Also, let f(x) = f_1(x) + f_2(x) 
    f_1, f_2 both differentiables in its domain then
    f_'(x) = f_1′(x) + f_2′(x) 
    '''

    if (f == ''):
        return

    terms = f.split(' ')
    operators = []
    dydx = []

    for p in terms:
        if (p == '+' or p == '-'):
            operators.append(p + ' ')
        else:
            # Search for coefficients
            i = 0
            coeff = ''
            while (i < len(p) and p[i] != 'x'):
                coeff += p[i]
                i += 1
            if (coeff == ''):
                coeff = 1
            # Search for exponents

            if (p.find('x') != -1):
                k = p.find('^') + 1
                exp = ''
                while (k != 0 and k < (len(p))):
                    exp += p[k]
                    k += 1
                if (k == 0):
                    exp = 1

                dydx_coeff = int(coeff) * int(exp)
                dydx_exp = int(exp) - 1

                if (dydx_exp != 0):
                    if (dydx_exp == 1):
                        dydx_p = str(dydx_coeff) + 'x'
                    else:
                        dydx_p = str(dydx_coeff) + 'x^' + str(dydx_exp)
                else:
                    dydx_p = str(dydx_coeff)

                dydx.append(dydx_p)
            else:
                # we remove the operator from the list because we are adding or substracting 0
                operators.pop()

    k = 0
    dydx_str = ''
    for i in operators:
        dydx_str += dydx[k] + ' ' + i
        k += 1

    dydx_str += dydx[len(dydx) - 1]

    return dydx_str


def product_rule(f):
    '''
    Input type: 
        (polynomial) * (polynomial_2)
    Ouput:
        (polynomial)'(polynomial_2) + (polynomial)(polynomial_2)'

    let f g both differentiables in its domain
    (f g)' = f' g + f g'
    '''
    operator_pos = f.find('*')
    first_term = f[1:operator_pos-2]
    second_term = f[operator_pos+3:len(f) - 1]

    dydx_first_term = diff_polynomials(first_term)
    dydx_second_term = diff_polynomials(second_term)

    dydx = '('+dydx_first_term+')' + ' * ' + '('+second_term+')' + \
        ' + ' + '('+first_term+')' + ' * ' + '('+dydx_second_term+')'
    return dydx


print('Input: (x^2 - 3x + 2) * (2x^4 - 24x)' + '\n' +
      'Derivative: ' + product_rule('(x^2 - 3x + 2) * (2x^4 - 24x)'))
