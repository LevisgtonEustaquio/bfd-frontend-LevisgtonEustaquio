const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira dados, no terminal

console.log("Função que realiza a soma dos elementos do 1 até o valor inserido pelo usuário\n") //exibe na tela o enunciado!

//criação da variável
let n = prompt("Digite um número: ");

//arrow function com laço de repetição
let soma = (n) => {
    let cont = 0; //variável que vai receber o valor da soma

    for (let i = 1; i <= n; i++) {
        cont += i; //soma o valor de i ao total
    }
    console.log("A soma dos valores de 1 até:", n, "é:", cont); //exibe no terminal o valor da soma
}


soma(n); //executa a função com o valor do parâmetro.