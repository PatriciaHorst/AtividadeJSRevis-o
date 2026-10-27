/*
Crie um objeto sensor com as propriedades idSensor, leituraAtual e status ('Normal' ou 'Alerta').
Adicione o método atualizarLeitura(novaLeitura) que altera a leitura atual e 
define o status como 'Alerta' caso o valor supere 75 Hz. 
*/

const sensor ={
    idSensor:"DE89J9",
    leituraAtual:"estavel",
    status:(
    'Alerta',
    'Normal'
    )
}

sensor.atualizarLeitura = function(){
   return sensor.status = "Alerta";
}
console.log(sensor.atualizarLeitura);