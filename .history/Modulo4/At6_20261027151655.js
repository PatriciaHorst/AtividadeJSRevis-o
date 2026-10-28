/*
Crie um objeto maquina com a propriedade nome e um array de objetos chamado historicoManutencao
(onde cada manutenção possui data, tecnico e tipo). Acesse e exiba no console a data e o técnico
responsável pela última manutenção realizada. 
*/

const maquina ={
    nome:"CNC",
    historicoManutencao:[
        {
        data:"2026-09-25",
        tecnico:"Bernando",
        tipo:"Manutenção Preventiva",
        },
        {
        data:"2026-02-17",
        tecnico:"Julia",
        tipo:"Limpeza",
        },
        {
        data:"2026-10-31",
        tecnico:"Marylia",
        tipo:"Checagem pré-utilização",
        }
    ]
}

const listaOrdenação = maquina.historicoManutencao.datasort((a,b)=> Date(a.data) -Date(b.data));

console.log("A data mais antiga é: "+listaOrdenação.at[-1]);