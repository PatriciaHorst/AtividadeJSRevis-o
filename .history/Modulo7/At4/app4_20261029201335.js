/*
Crie um campo <input type='number' id='inputTemp'> e um parágrafo <p id='mensagemTemp'></p>. Adicione um 
evento que, ao digitar a temperatura, verifique se o valor ultrapassa 80°C. Se sim, exiba 'Alerta de 
Superaquecimento!' em vermelho; caso contrário, exiba 'Temperatura Normal' em verde.
*/

const formulario = document.getElementById("")
const temp = document.getElementById("inputTemp");
const mensagem = document.getElementById("mensagemTemp");

temp.addEventListener("submit", ()=>{

    if(temp.value > 80){
        mensagem.textContent = "Alerta de Superaquecimento!"
        mensagem.classList.add("alerta");
    }else{
        mensagem.textContent = "Temperatura Normal"
    }
})