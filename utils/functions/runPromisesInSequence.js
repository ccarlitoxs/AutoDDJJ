export const runPromisesInSequence = async (promesas) => {
  const resultados = [];

  for (const f of promesas) {
    const resultado = await f();
    if (resultado) {
      resultados.push(resultado);
    }
  }

  return resultados;
};
