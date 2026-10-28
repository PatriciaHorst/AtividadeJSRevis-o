/*
1. Crie uma função construtora Injetora que receba id e capacidadeToneladas e atribua ao this. 
2. Adicione o método exibirCapacidade ao Injetora.prototype que imprima: 'Injetora [id] possui capacidade de 
[capacidadeToneladas]T.'                                                         
3. Crie uma instância: let injetora01 = new Injetora('INJ-01', 250); 
4. Execute injetora01.exibirCapacidade(). 
 */
function Injetora(id, capacidadeToneladas){
    this.id = id;
    this.capacidadeToneladas = capacidadeToneladas;
}

Injetora.prototype.exibirCapacidade = function(){
    return 'Injetora '+injetora01.id+' possui capacidade de ' +injetora.InjetoracapacidadeToneladas+ 'T.';
}

let injetora01 = new Injetora('INJ-01', 250);

injetora01.exibirCapacidade()