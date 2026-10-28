/*Crie um objeto chamado tornoCNC com as propriedades id, modelo e horasTrabalhadas.
 Realize as seguintes 
etapas: 
● 1. Acesse e imprima a propriedade modelo. 
● 2. Atualize a propriedade horasTrabalhadas para 12. 
● 3. Adicione o método precisaManutencao() que retorna true se horasTrabalhadas 
for maior que 10. 
● 4. Adicione o método exibirRelatorio() que retorna uma string 
detalhando o estado completo do torno. 
*/

let tornoCNC ={
     id :1,
     modelo:"AS21",
     horasTrabalhadas:8
}

console.log(tornoCNC.modelo);

tornoCNC.horasTrabalhadas = 12;

console.log(tornoCNC);

tornoCNC.precisaManutencao = function(){
    return "A maquina trabalhou mais de 10 horas? => "+ this.horasTrabalhadas > 10;
}

console.log(tornoCNC.precisaManutencao());

tornoCNC.exibirRelatorio = function(){
    return `
    Id: ${this.id}, 
    Modelo: ${this.modelo},
    Horas trabalhadas: ${this.horasTrabalhadas},
    A maquina trabalhou mais de 10 horas? => ${this.precisaManutencao()}`;
}

console.log(tornoCNC.exibirRelatorio());
