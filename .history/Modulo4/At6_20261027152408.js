/*
Crie um objeto maquina com a propriedade nome e um array de objetos chamado historicoManutencao
(onde cada manutenção possui data, tecnico e tipo). Acesse e exiba no console a data e o técnico
responsável pela última manutenção realizada. 
*/

const maquina ={
    nome:"CNC",
    historicoManutencao:[
        {
        data:new Date("2026-09-25").toLocaleDateString("pr-Br", { time
        }),
        tecnico:"Bernando",
        tipo:"Manutenção Preventiva",
        },
        {
        data:new Date("2026-02-17"),
        tecnico:"Julia",
        tipo:"Limpeza",
        },
        {
        data:new Date("2026-10-31"),
        tecnico:"Marylia",
        tipo:"Checagem pré-utilização",
        }
    ]
}

const listaOrdenação = maquina.historicoManutencao.sort((a,b)=> a.data - b.data);

console.log("A data mais antiga é: "+listaOrdenação.at(-1));