const prompt = require("prompt-sync")(); //tive que usar esse comando para requisitar ao usuário que insira dados, no terminal

console.log("Função que exibe uma tabuada do número inserido pelo usuário\n") //exibe na tela o enunciado!


//cria a variável que receberá valor, inserido pelo usuário no prompt
let num = prompt("Digite o valor para a tabuada: ");

//arrow function 
let tabuada = (num) =>{
    let cont = 0; //cria uma variável que receberá o valor da operação da tabuada
    console.log("O valor da tabuada do número:", num);
    for (let i = 1; i <= 10; i++){ //laço de repetição para percorrer o valor da tabuada
        cont = num * i; //atribui a variável cont o resultado da operação da tabuada
        console.log(num,"*",i,"=",cont); //exibe o valor atual da variável
    }

}

tabuada(num); //executa a arrow function, solicitando ao usuário que insira o valor da tabuada
