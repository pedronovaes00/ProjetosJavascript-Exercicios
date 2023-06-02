/*a)   Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.*/ 
function tabuada(){
    
    let numero = Number (prompt('Digite um numero'))

    let contadora = 1

    let resultado = 0

    while (contadora<11){

        resultado = contadora*numero;

      contadora++  
      console.log(resultado)
    }
}

    
