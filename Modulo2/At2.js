/*
Crie um objeto balanca que represente uma balança de expedição de carga. 
O objeto deve conter as propriedades 
pesoAtual e capacidadeMaxima (ex: 5000 kg), e os métodos pesar(massa),
 zerar() e verificarSobrecarga(). 
*/

const balanca ={
    pesoAtual:0,
    capacidadeMaxima:4500,
    pesar(){
        return this.pesoAtual;
    },
    zerar(){
        return this.pesoAtual = 0;
    },
    verificarSobrecarga(){
        if(this.pesoAtual > this.capacidadeMaxima){
            return `Sobrecarga identificada, o limite é: ${this.capacidadeMaxima}Kg` 
        }
    }
}