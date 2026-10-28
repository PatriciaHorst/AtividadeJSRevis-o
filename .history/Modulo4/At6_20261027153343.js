/*
Crie um objeto maquina com a propriedade nome e um array de objetos chamado historicoManutencao
(onde cada manutenção possui data, tecnico e tipo). Acesse e exiba no console a data e o técnico
responsável pela última manutenção realizada. 
*/

const maquina ={
    nome:"CNC",
    historicoManutencao:[
        {
        data:new Date("2026-09-25"),
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

const ordenção = [...maquina.historicoManutencao].sort((a,b)=> a.data - b.data);

const ultimos = ordencaoo.at(-1);

console.log("A data da ultima manuteção: "+ultimos.data.toLocaleDateString("pt-BR", { timeZone : "UTC"}));
console.log("O tecnico responsavel: "+ultimos.tecnico);