/*Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).*/

console.log('EU DISSE PRA NÃO APERTAR')

function cemPrimeiros(){

    let contadora = 1
    let numero = 0
    let valorPassado = numero + contadora

    while (contadora < 101) {
        valorPassado = numero + contadora
        console.log('A soma dos 100 primeiros numeros é igual a :' + valorPassado)
    }
}
