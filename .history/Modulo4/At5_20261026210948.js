/*
Crie um array de objetos chamado ordensDeServico. Cada objeto deve conter idOS, 
cliente e o objeto detalhes (contendo produto e quantidade). 
Percorra o array com um laço de repetição e imprima o idOS e o nome do produto de cada ordem.
 */

let ordensDeServico =[

    {
        idOS:34646235,
        cliente:"Claudia",
        objetoDetalhado:{
            produto:"limpador vaso",
            quantidade:1
        }
    },
    {
        idOS:934886678,
        cliente:"Flavia",
        objetoDetalhado:{
            produto:"caixa organizadora",
            quantidade:3
        }
    },
    {
        idOS:34646235,
        cliente:"Fernanda",
        objetoDetalhado:{
            produto:"baloes de festa",
            quantidade:2
        }
    }

]

for( ordensDeServico = i; i <= ordensDeServico.length; i++){
    console.log(i.idOS, i.produto)
}