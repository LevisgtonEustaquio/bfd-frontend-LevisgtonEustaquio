console.log("Função que imprime no terminal os numeros de 1 a 10!\n") //exibe na tela o enunciado!

//arrow function que executa um laço de repetição para exibir uma contagem, definida pelo tamanho da variável i
let imprimir = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//executa a função e retorna o resultado a partir do valor inserido.
imprimir();