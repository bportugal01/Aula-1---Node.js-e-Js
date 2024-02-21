// primeiro exemplo de servidor com Node.js
console.log("Rodando com sucesso\n Teste JS\n");

// cálculo de soma js com comando Node.js
var n1 = 10;
var n2 = 20;
var soma = n1 + n2;
console.log("A soma de " + n1 + " + " + n2 + " é igual a " + soma + "\n");

//condicional if
if (soma > 20) {
    console.log("A soma é maior que 20\n");
} else {
    console.log("A soma é menor que 20\n");
}

//condicional switch
var dia = new Date().getDay();
switch (dia) {
    case 0:
        console.log("Hoje é Domingo\n");
        break;
    case 1:
        console.log("Hoje é Segunda-feira\n");
        break;
    case 2:
        console.log("Hoje é Terça-feira\n");
        break;
    case 3:
        console.log("Hoje é Quarta-feira\n");
        break;
    case 4:
        console.log("Hoje é Quinta-feira\n");
        break;
    case 5:
        console.log("Hoje é Sexta-feira\n");
        break;
    case 6:
        console.log("Hoje é Sábado\n");
        break;
    default:
        console.log("Dia inválido!\n");
}

//condicional while
var contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

//condicional do...while
var contador2 = 0;
do {
    console.log("Contador 2: " + contador2);
    contador2++;
} while (contador2 < 5);

//condicional for
for (var i = 0; i < 5; i++) {
    console.log("Valor de i: " + i);
}

//condicional for...in (para iterar sobre propriedades de um objeto)
var carro = { marca: "Ford", modelo: "Mustang", ano: 1969 };
var texto = "";
var x;
for (x in carro) {
    texto += carro[x] + " ";
}
console.log(texto);

//condicional for...of (para iterar sobre valores de um objeto iterável)
var carros = ["Volvo", "BMW", "Toyota"];
var text = "";
for (let car of carros) {
    text += car + " ";
}
console.log(text);

//expotação os módulos
//soma
var somaFn = require("./soma.js");
console.log("Total da Soma : " + somaFn(10, 20));

//subtração
var subFn = require("./sub.js");
console.log("Total da Subtração :" + subFn(10, 20));

//divisão
var divFn = require("./div.js");
console.log("Total da Divisão : " + divFn(10, 20));

//multiplicação
var multFn = require("./mult.js");
console.log("Total da Multiplicação : " + multFn(10, 20));
