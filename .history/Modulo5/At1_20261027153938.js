/*
Crie dois arrays: loteManha contendo ['PECA-1', 'PECA-2'] e loteTarde contendo ['PECA-3', 'PECA-4']. Utilize o 
operador de espalhamento (...) para criar o array producaoDiariaTotal combinando ambos os lotes. Imprima o 
resultado.
*/

const loteManha = ['PECA-1', 'PECA-2'];

const loteTarde = ['PECA-3', 'PECA-4'];

const producaoDiariaTotal = [...loteManha,...loteTarde];

console.log()