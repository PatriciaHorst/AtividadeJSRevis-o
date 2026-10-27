/*
Crie um objeto maquina com a propriedade nome e um array de objetos chamado historicoManutencao
(onde cada manutenção possui data, tecnico e tipo). Acesse e exiba no console a data e o técnico
responsável pela última manutenção realizada. 
*/

const maquina ={
    nome:"CNC",
    historicoManutencao:[
        {
        data:"25/09/2026",
        tecnico:"Bernando",
        tipo:"Manutenção Preventiva",
        },
        {
        data:"12/10/2026",
        tecnico:"Julia",
        tipo:"Limpeza",
        },
        {
        data:"31/02/2026",
        tecnico:"Marylia",
        tipo:"Checagem pré-utilização",
        }
    ]
}

const listaOrdenação = maquina.historicoManutencao.sort((data,)=>)