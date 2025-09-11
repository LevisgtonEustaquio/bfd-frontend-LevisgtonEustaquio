console.log("Função que imprime em ordem decrescente de 10 a 1!\n") //exibe na tela o enunciado!

//arrow function laço de repetição com condição de parada
let decrescente = () => {
    let num = 10; //inicia a variável com o valor 10
    while (num >= 1) { //laço de repetição executa enquanto a condição for verdadeira
        console.log(num); //exibe o valor atual da variável
        num--; //decrementa o valor da variável (num)
    }
}

decrescente(); //executa a função