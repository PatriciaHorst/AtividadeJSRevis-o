/*
Crie uma interface web com um cabeçalho <h2 id='contador'>0</h2> e um botão <button id='btnProduzir'>
Registrar Peça</button>. Crie um script JavaScript que incremente o valor exibido no contador em +1 a cada clique no botão. 
*/

const botao = document.getElementById("bntProduzir");
const contador = document.getElementById("contador")

botao.addEventListener("click", () =>{
    contador++;
})

console.log(contador);
console.log(typeof contador)
