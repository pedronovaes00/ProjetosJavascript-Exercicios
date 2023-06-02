// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
// forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
// variável A. Apresentar os valores trocados

let A = Number(prompt('Digite um valor(A):'))
let B = Number(prompt('Digite outro valor(B):'))
let troca = A = B ; 
let troca2 = B = A ; 
alert ('O valor de A é :' +  troca, 'O valor de B é:' + troca2)