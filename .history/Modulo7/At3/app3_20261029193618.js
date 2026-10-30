/*
Crie um formulário com dois campos de entrada (<input id='nomeInsumo'> e <input id='qtdInsumo'>) e o botão 
'Adicionar ao Estoque'. Ao clicar, crie dinamicamente uma nova linha (<tr>) na tabela (<tbody id='tabelaEstoque'>) 
exibindo o nome e a quantidade do insumo informado.
*/

const botao = document.getElementById("btnAdiciona");
const nome = document.getElementById("nomeInsumo");
const quant = document.getElementById("qtdInsumo");
const tabelinha = document.getElementById("tabelaEstoque");


botao.addEventListener("click",( ) => {
    const nomeGuardado = nome.value;
    const quantGuardada = quant.value;

    tabelinha.textContent = ""

})