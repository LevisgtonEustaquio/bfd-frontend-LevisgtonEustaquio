const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira um valor para a tabuada, no terminal

console.log("Função que verifica se o número inserido é par ou impar\n") //exibe na tela o enunciado!

//criação da variável, solicitando ao usuário o seu valor
let num = prompt("Digite um número: ");

//arrow function que compara atravez de if/else se o valor será impar ou par, a partir do resultado do operador % "resto da divisão"
let compara = (num) => {
    if (num % 2 === 0) {
        console.log("O numero:", num, " é par!");
    } else {
        console.log("O numero:", num, " é impar!");
    }
}

//executa a função e retorna o resultado a partir do valor inserido.
compara(num);