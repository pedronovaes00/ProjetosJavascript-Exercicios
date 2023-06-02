let valor = Number (prompt('Valor da prestação: R$:'))
let taxa = Number (prompt('Taxa de Juros (%):'))
let tempo = Number (prompt('Tempo de Atraso (dias):'))
let conta = valor + (valor * taxa/100) * tempo
alert ('O valor das prestações em atraso é:' + conta)