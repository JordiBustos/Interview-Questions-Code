/*
 * @param f funcion
 * @param p0 aproximación inicial
 * @param p1 aproximación inicial
 * @param TOL tolerancia
 * @param N número máximo de iteraciones
 */
const metodo_secante = (f, p0, p1, TOL, N) => {
  let q0 = f(p0),
      q1 = f(p1);

  for (let i = 0; i < N; i++) {
    p = p1 - q1 * (p1 - p0) / (q1 - q0);
    if (Math.abs(p - p1) < TOL) return p;

    p0 = p1;
    p1 = p;

    q0 = q1;
    q1 = f(p);
  }

  return 'El metodo fracaso despues de N iteraciones';
}

console.log(metodo_secante(x => Math.cos(x), 0.5, Math.PI/4, 0.0001, 1000));