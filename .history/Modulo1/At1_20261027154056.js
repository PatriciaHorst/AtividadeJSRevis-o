/*
Crie uma função chamada calcularTemperaturaMedia que recebe um array com as medições de temperatura
(em °C) de um forno industrial de fundição e retorna a temperatura média do lote de produção.
 */

let temperaturas = [300,432,700,520];

const soma = temperaturas.reduce((acumulador, valorAtual) => acumulador + valorAtual,0);

let media = soma /temperaturas.length

console.log("Essa é a media: "+media);