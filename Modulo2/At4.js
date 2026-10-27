/*
Adicione uma nova propriedade chamada episFornecidos ao objeto operador criado anteriormente.
O valor dessa propriedade deve ser um array contendo os nomes dos equipamentos de proteção 
(exemplo: ['Capacete', 'Protetor Auricular', 'Bota de Aço']). 
*/

const linhaProducao ={
    codigo: "12D310F",
    operadores: ["Pedro", "Fabricio", "Carlos", "Wesley"],
    setor:12
}

linhaProducao.episFornecidos = ['Capacete', 'Protetor Auricular', 'Bota de Aço'];

console.log(linhaProducao);