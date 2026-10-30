/*
1. Crie um objeto parametrosSeguranca com limiteTemperatura: 85. 
2. Utilize Object.freeze() para congelar o objeto. 
3. Tente alterar limiteTemperatura para 100 e adicionar a propriedade limitePressao: 10. 
4. Imprima o objeto para comprovar que as alterações foram bloqueadas.
 */

const parametrosSeguranca ={
    limiteTemperatura:85,
}

Object.freeze(parametrosSeguranca)

parametrosSeguranca.limiteTemperatura = 100;

