/**
 * Punto fijo
 * p: g(p) = p
 * 
 * teorema: g continua en [a, b] 
 * g(x) incluida en [a, b] -> existe un p en ese intervalo tq g(p) = p
 * si además |g'(x) < k < 1| -> p es único
 * 
 * Teorema del punto fijo: Bajo esas hipotesis
 * p_0 en [a, b] y {p_n}n>=1 es tal p_n = g(p_(n-1))
 * -> entonces existe un único p tq lim n->inf p_n = p
 * 
 * p_0 en [a,b]
 * p_1 = g(p_0)
 * p_2 = = g(p_1)
 * 
 * Por el teorema existe un p tq g(p) = p
 * 
 * d/ |p_n - p| = g(p_n-1) - p|
 *                       TVM
 *   = |g(p_n-1) - g(p)| = |g'(c)| |p_n-1 - p|
 *                            <= k         TVM
 *  <= k |p_n-1 - p| = k |g(p_n-2) - g(p)| = k |g'(c2)| |p_n-2 - p|
 *  ... < k^n |p_0 - p|  -> p_n -> p
 *        k<1
 * 
 *  Criterio de parada: |p_n+1 - p_n| < TOL
  */

/*
 * Es difícil encontrar el intervalo y la función para que cumplan las hipotesis.
 * Ventaja Unicidad del punto fijo (evita perder soluciones) y convergencia más rápida que el método de bisección. 
 */

/*
  Teorema: Supongamos g tq satisface las hipotesis del teorema de punto fijo -> 
  (1) |p_n - p| < k^n max(p0-a, b-p0)
  y
  (2) |p_n - p| < k^n/(1-k) |p1-p0|
    
*/

/*
 * @param g funcion que cumple las hipotesis del teorema
 * @param p0 punto inicial
 * @param TOL tolerancia
 * @param N numero máximo de iteraciones
 * @output P punto fijo aproximado || failed
 */
const punto_fijo = (g, p0, TOL, N) => {
  let i = 0;
  let p;
  while (i < N) {
    p = g(p0);
    if (Math.abs(p-p0) < TOL) return p;
    p0 = p;
    i++;
  }
  return i === N ? `Max iteraciones: ${p}` : p; 
}

// g es continua y derivable en p0
// pertenece al intervalo [1, 2] y existe |g'(x)| <= k < 1
const g = (x) => Math.sqrt(10 / (x + 4));
const a = punto_fijo(g, 2, .000001, 100);
