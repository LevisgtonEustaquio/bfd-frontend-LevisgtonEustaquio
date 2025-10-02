const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira um valor para a tabuada, no terminal

console.log("Função que verifica se é um dia útil ou final de semana\n") //exibe na tela o enunciado!

//cria a variável que receberá valor, inserido pelo usuário no prompt
let dia = prompt("Digite um dia da semana (em minúsculo, sem acentos): ");

//arrow function com switch/case que verifica se a opcao digitada faz parte do menu e imprime o resultado
let verifica = (dia) => {
    switch (dia) {
        case "segunda":
            console.log(dia + " é dia útil");
            break;
        case "terca":
            console.log(dia + " é dia útil");
            break;
        case "quarta":
            console.log(dia + " é dia útil");
            break;
        case "quinta":
            console.log(dia + " é dia útil");
            break;
        case "sexta":
            console.log(dia + " é dia útil");
            break;
        case "sabado":
            console.log(dia + " é final de semana");
            break;
        case "domingo":
            console.log(dia + " é final de semana");
            break;
        
        default:
            console.log("Não é dia de semana!"); //caso nenhuma das opções seja digita, retorna uma mensagen avisando ao usuário

    }
}

//executa a função
verifica(dia);