console.log("Função que recebe tres valores e imprime uma frase formatada!\n") //exibe na tela o enunciado!

//cria as variáveis que receberão os valores, inserido pelo usuário no prompt
let nome;
let idade;
let cidade;




//arrow function que concatena o valor das variáveis a frase no console.log
let frase = (nome, idade, cidade) => {

    if (typeof nome !== "string") { // valida se o tipo de valor inserido na variável é do tipo string
        console.log("Nome com tipo inválido!");
    } else if (typeof idade !== "number") { // valida se o tipo de valor inserido na variável é do tipo number
        console.log("Idade com tipo inválido!");
    } else if (typeof cidade !== "string") { // valida se o tipo de valor inserido na variável é do tipo string
        console.log("Cidade com tipo inválido!");
    }

    else {
        console.log("Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade); //concatena os valores inseridos com a frase pre formatada.
    }
}

//executa a função
frase("Levisgton", 34, "Camaragibe");