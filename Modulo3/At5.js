/*
Você possui o objeto prensa com dados desatualizados. Execute as correções necessárias: 
● 1. Altere a propriedade pressaoPSI para 150. 
● 2. Adicione a propriedade operacional com o valor true. 
● 3. Imprima o objeto final atualizado no console.
*/

let prensa = { 
    id: "PR-01", 
    pressaoPSI: 90, 
    setor: "Estamparia" 
};

prensa.pressaoPSI = 150;
prensa.operacional = true;

console.log(prensa);