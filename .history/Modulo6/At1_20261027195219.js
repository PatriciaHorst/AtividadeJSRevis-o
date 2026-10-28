/*
1. Crie um objeto equipamento com a propriedade alimentacaoEletrica = '380V'. 
2. Crie um objeto compressor usando Object.create(equipamento). O compressor deve ter a propriedade própria 
pressaoMaxBar = 10. 
3. Imprima a pressaoMaxBar do compressor. 
4. Imprima a alimentacaoEletrica do compressor e observe a herança via protótipo. 
*/

const equipamento ={
    alimentacaoEletrica:'380V',
}

const compressor = Object.create(equipamento);

compressor= {
    pressaoMaxBar:10
}

console.log(compressor.pressaoMaxBar);
console.log(compressor.alimentacaoEletrica);
