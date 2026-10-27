/*
Gerencie as especificações de um componente da linha de montagem: 
● 1. Crie o objeto peca com nome 'Engrenagem Helicoidal', custoProducao 45.00 e etapas ['Fundição', 'Usinagem', 
'Tratamento Térmico']. 
● 2. Acesse os dados e exiba no console: 'A peça Engrenagem Helicoidal tem custo de produção de R$ 45.00.' 
● 3. Atualize o custoProducao para 48.50. 
● 4. Adicione a propriedade revisada com o valor true. 
● 5. Imprima o objeto completo no console.
*/

const peca = {
    nome:"Engrenagem Helicoidal",
    custoProducao:45.00,
    etapas: ['Fundição', 'Usinagem', 'Tratamento Térmico']
}

console.log("A "+ peca.nome +" tem custo de produção de "+ peca.custoProducao);
