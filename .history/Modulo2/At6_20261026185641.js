/*
Crie um objeto sensor com as propriedades idSensor, leituraAtual e status ('Normal' ou 'Alerta').
Adicione o método atualizarLeitura(novaLeitura) que altera a leitura atual e 
define o status como 'Alerta' caso o valor supere 75 Hz. 
*/

const sensor ={
    idSensor:"DE89J9",
    leituraAtual:60,
    status:"Normal"
}

sensor.atualizarLeitura = function(){
   if(this.leituraAtual > 75){
    console.log(sensor.status = Alerta);
   }else {

   }
}

console.log(sensor.atualizarLeitura());