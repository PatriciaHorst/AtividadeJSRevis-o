/*
Crie dois objetos: telemetriaMecanica (com pressao e rotacaoRPM) e telemetriaEletrica (com correnteAmpere e 
tensaoVolts). Utilize o operador de espalhamento para criar o objeto diagnosticoCompleto unindo todas as 
propriedades. Imprima o resultado.
*/

let telemetriaMecanica ={
    pressao: 32 ,
    rotacaoRPM:3.000
}

LET telemetriaEletrica ={
    correnteAmpere:50, 
    tensaoVolts:220
}

const diagnosticoCompleto = [...telemetriaMecanica.pressao,...telemetriaMecanica.rotacaoRPM,...telemetriaEletrica.correnteAmpere,...telemetriaEletrica.tensaoVolts];