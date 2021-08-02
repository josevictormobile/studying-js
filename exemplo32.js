// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

const comparador = (num1,num2)=> {
    if(num1==num2){
        console.log("Os números são iguais");
    }else if(num1>num2){
        console.log(`O número ${num1} é o maior`);
    }else{
        console.log(`O número ${num2} é o maior`);
    }
};

comparador(9,3);