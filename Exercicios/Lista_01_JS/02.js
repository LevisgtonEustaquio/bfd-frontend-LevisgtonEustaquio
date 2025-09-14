const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira dados, no terminal

console.log("Função que verifica numeros positivos, negativos e zero!\n") //exibe na tela o enunciado!

//criação da variável, solicitando ao usuário o seu valor
let num = prompt("Digite um número: ");
console.log("\n");

//arrow function que verifica atravez de if/else se o numero é positivo, negativo ou zero
let verifica = (num) => {
    if (num > 0) {
        console.log("O número:", num, "é positivo!");
    } else if (num < 0) {
        console.log("O número:", num, "é negativo!");
    } else {
        console.log("Número é zero!");
    }
}

//executa a função e retorna o resultado a partir do valor inserido.
verifica(num);
