/*
1. Imprima o segundo insumo da lista.
● 2. Adicione 'Polímero' ao fi nal do array.
● 3. Remova o primeiro insumo da lista (que foi requisitado pela produção).
● 4. Verifi que a quantidade total de insumos restantes no array.
● 5. Use um laço for tradicional para imprimir cada insumo no console.
● 6. Use o método forEach() para exibir a mensagem: 'Insumo pronto para uso: [nome]'.
● 7. Use o método map() para gerar um array contendo o número de caracteres do nome de cada insumo.
● 8. Use o método fi lter() para criar um array contendo apenas os insumos com mais de 5 caracteres.
 */

const lista = ['Aço', 'Alumínio' , 'Cobre']

console.log(lista[1]);

lista.push('Polímero');
 console.log(lista);

lista.shift();
console.log(lista)

console.log(lista.length);

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

lista.forEach( nome => console.log('Insumo pronto para uso: '+nome))

const nomes = lista.map(nome => nome.length)
console.log(nomes);

const novaLista = lista.filter(nome => nome.length > 5)
console.log(novaLista);
