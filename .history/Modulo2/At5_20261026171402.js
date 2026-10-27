/*
Crie um objeto maquinaInjetora com as propriedades producaoPlanejada e producaoRealizada.
Adicione um método calcularEficiencia() que retorna a porcentagem de produtividade alcançada no turno.
*/

const maquinaInjetora ={
    producaoPlanejada: 12,
    producaoRealizada:8
}

maquinaInjetora.calcularEficiencia = function(){
    return (this.producaoRealizada / this.producaoPlanejada)* 100 +"%";
}

console.log(maquinaInjetora.calcularEficiencia());