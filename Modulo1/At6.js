/*
Crie uma função que receba um array com 3 horários registrados (em horas inteiras, ex: [14, 8, 11])
para manutenção preventiva de robôs e ordene esses horários em ordem cronológica crescente. Desenvolva sua própria lógica de ordenação.
 */

const listaHoras = [14,8,11];

const ordenação = listaHoras.sort((a, b) => a - b );

console.log(ordenação);