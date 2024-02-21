// Declaração de variáveis
var nome = "Bruno Portugal";
var idade = 25;
var altura = 1.75;
var isEstudante = true;

// Impressão no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("É estudante?", isEstudante);

// Estrutura condicional (if-else)
if (idade >= 18) {
    console.log("Esta pessoa é maior de idade.");
} else {
    console.log("Esta pessoa é menor de idade.");
}

// Estrutura de repetição (for loop)
console.log("Contagem regressiva:");
for (var i = 10; i >= 0; i--) {
    console.log(i);
}

// Função simples
function saudacao(nome) {
    console.log("Olá, " + nome + "! Bem-vindo(a)!");
}

// Chamando a função
saudacao(nome);
