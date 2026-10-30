/*
Crie uma página HTML contendo um botão <button id='btnAlerta'>Disparar Alerta</button> e uma <div 
id='statusPainel'>Linha Operando Normalmente</div>. Ao clicar no botão, utilize document.getElementById() para 
alterar o texto da div para 'ATENÇÃO: Parada de Emergência Solicitada!' e mudar a cor do texto para vermelho.
 */

const botao = document.getElementById("btnAlerta");
const mensagem = document.getElementById("statusPainel")

botao.addEventListener("click", () => {
    mensagem.textContent = "ATENÇÃO: Parada de Emergência Solicitada!";
    aviso.classList.add("aviso")
})

