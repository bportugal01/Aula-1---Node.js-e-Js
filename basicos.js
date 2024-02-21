// Declaração de variáveis
var nome = "Bruno Portugal";
var idade = 25;
var altura = 1.75;
var isEstudante = true;

// Impressão no console
console.log("\n" + "Nome:", nome + "\n");
console.log("Idade:", idade + "\n");
console.log("Altura:", altura + "\n");
console.log("É estudante?", isEstudante + "\n");

// Estrutura condicional (if-else)
if (idade >= 18) {
    console.log("Esta pessoa é maior de idade.\n");
} else {
    console.log("Esta pessoa é menor de idade.\n");
}

// Estrutura de repetição (for loop)
console.log("Contagem regressiva: ");
for (var i = 10; i >= 0; i--) {
    console.log(i);
}

// Função simples
function saudacao(nome) {
    console.log("\n" + "Olá, " + nome + "! Bem-vindo(a)!\n");
}

// Chamando a função
saudacao(nome);
