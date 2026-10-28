/*
Crie um objeto receitaOriginal com temperatura: 200 e tempoMinutos: 45. Crie uma cópia chamada 
receitaAjustada utilizando o operador de espalhamento. Altere a temperatura na receita ajustada para 220 e 
imprima ambos os objetos para demonstrar que o original não foi alterado. 
*/

const receitaOriginal ={
    temperatura:200,
    tempoMinutos:45
}

const receitaAjustada = [...receitaOriginal];

receitaAjustada.temperatura = 220;

console.log(0)