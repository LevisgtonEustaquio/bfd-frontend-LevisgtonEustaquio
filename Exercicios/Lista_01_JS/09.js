const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira um valor para a tabuada, no terminal

console.log("Função que recebe tres valores e imprime uma frase formatada!\n") //exibe na tela o enunciado!

//cria as variáveis que receberão os valores, inserido pelo usuário no prompt
let X = prompt("Digite ser nome: ");
let Y = prompt("Digite sua idade: ");
let Z = prompt("Digite sua cidade: ");


//arrow function que concatena o valor das variáveis a frase no console.log
let frase = (X, Y, Z) => {
    if (typeof X !== "string") {
        console.log("Nome com tipo inválido!");
    } else if (typeof Y !== "number") {
        console.log("Idade com tipo inválido!");
    } else if (typeof Z !== "string") {
        console.log("Cidade com tipo inválido!");
    }

    else {
        console.log("Meu nome é " + X + ", tenho " + Y + " anos e moro em " + Z);
    }
}

//executa a função
frase(X, Y, Z);