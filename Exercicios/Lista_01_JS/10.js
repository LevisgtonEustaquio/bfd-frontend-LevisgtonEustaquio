console.log("Função que recebe um array e imprime apenas os numeros pares!\n") //exibe na tela o enunciado!

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //array

let numerosPares = (newArray) => {  //arrow function que verificar se um número na array é par e o imprime na tela

    let newNumerosPares = [];  //array que irá armazenar apenas os numeros pares

    for (const value of newArray) {

        if( value % 2 === 0){  //condição que verificar se o número é par pelo resto da divisão por 2
            newNumerosPares.push(value); //armazena os valores validados no novo array
        } 
        
    }
    
    //condição que testa se o novo array está vazio, caso esteja vazio imprime uma mensagem, caso contenha valores, os imprime na tela
    if (newNumerosPares.length === 0){
        console.log("Nenhum número inserido é Par!");
    } else {
        console.log(newNumerosPares);
    }


}

//executa a arrow function
numerosPares(newArray);