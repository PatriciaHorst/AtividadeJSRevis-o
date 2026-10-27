/*
Crie um objeto sensor com as propriedades idSensor, leituraAtual e status ('Normal' ou 'Alerta').
Adicione o método atualizarLeitura(novaLeitura) que altera a leitura atual e 
define o status como 'Alerta' caso o valor supere 75 Hz. 
*/

const sensor ={
    idSensor:"DE89J9",
    leituraAtual:90,
    status:"Normal"
}

sensor.atualizarLeitura = function(){
   if(this.leituraAtual > 75){
    return console.log("Sobrecarga, ",this.status = "Alerta");
   }
   if(this.atualizarLeitura <)
    return console.log("Sem perigo, "+this.status); 
   }
}

console.log(sensor.atualizarLeitura());