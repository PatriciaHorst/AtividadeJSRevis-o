/*
 Crie um objeto configPadrao com { velocidade: 100, modoSeguranca: true, idioma: 'PT' }. Crie um objeto 
configPersonalizada copiando configPadrao via espalhamento e alterando a velocidade para 150 na mesma 
instrução.
*/

const configPadrao ={
    velocidade: 100,
    modoSeguranca: true,
    idioma:'PT'
}

const configPersonalizada = {...configPadrao}configPersonalizada.velocidade = 150;

console.log(configPersonalizada);
