/**
 Crie um array chamado almoxarifado. Cada elemento do array deve ser um objeto representando um item com as 
propriedades ferramenta (objeto com nome e categoria) e quantidadeEmEstoque (número). 
● 1. Insira pelo menos 2 ferramentas distintas no array. 
● 2. Acesse e imprima o nome da primeira ferramenta. 
● 3. Acesse e imprima a quantidade em estoque da segunda ferramenta. 
 */

let  almoxarifado =[
    { 
        nome:"Machado",
        categoria:"Cortar lenha",
        quantidadeEmEstoque:13
    },
    {
        nome:"Pé de cabra",
        categoria:"Auxilio em manutenção",
        quantidadeEmEstoque:22
    }
];

console.log(almoxarifado[0].nome,);