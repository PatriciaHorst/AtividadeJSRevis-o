/*
Crie uma função que receba um array com os códigos de eventos de uma prensa hidráulica e
um código específi co (exemplo: código 101 para 'falha de pressão').
A função deve retornar quantas vezes esse evento específi co ocorreu durante o turno.
*/

const eventos =[101,102,103,101,104,104,101,102,203]

const codigoDesejado = 101;

const soma = eventos.filter( valor => valor == codigoDesejado  )

console.log("O evento 101 apareceu "+soma.length+" vezes no periodo atual");

