/*a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.*/

function tabuada() {

    let numero = (prompt('Digite um numero:'));
    let multiplicador = 1;
    let conta = multiplicador * numero;

    while (multiplicador < 11) {
        conta = multiplicador * numero;
        multiplicador++
        console.log(conta);
    }


}