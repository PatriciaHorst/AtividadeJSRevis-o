/*
Crie uma função que receba dois parâmetros: um array com as dimensões (em mm) das peças produzidas na usinagem
e a dimensão máxima permitida pela tolerância técnica.
A função deve retornar um novo array contendo apenas as peças fora da especifi cação (maiores que a tolerância).
 */

const pecas = [11.9,10.1,9.9];

const dimencaoMax = 11.0;

let verificador = pecas.filter(function( valores ){
    return valores > dimencaoMax
})

console.log("Peças sem verficação: "+pecas);
console.log("Peças apos verificação: "+verificador);
