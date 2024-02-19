// primeiro exemplo de servidor com Node.js
//console.log("Rodando com sucesso\n Teste JS")

// cálculo de soma js com comando Node.js
/*
var n1 = 10
var n2 = 20
var soma = n1 + n2

console.log("A soma de " + n1 + " + " + n2 + " é igual a " + soma + "\n")

//condicional if
if (soma > 20) {
    console.log("A soma é maior que 20\n")
} else {
    console.log("A soma é menor que 20\n")
}
*/

//expotação os módulos

//soma
var soma = require("./soma.js")
console.log("Total da Soma : " + soma(10, 20))

//subtração
var sub = require("./sub.js")
console.log("Total da Subrtração :" + sub(10, 20))

//divisão
var div = require("./div.js")
console.log("Total da Divisão : " + div(10, 20))

//multiplicação
var mult = require("./mult.js")
console.log("Total da Multiplicação : " + mult(10, 20))