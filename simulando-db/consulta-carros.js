const leia = require('readline-sync');
const carros = require('./database.js');

var entrada = leia.question('Deseja conhecer nossos carros por categoria? (s/n)');

if (entrada == "s"){
    console.log("Essas são as categorias disponíveis: ");
    console.log("Popular / Luxo");
    let categoria = leia.question("Qual categoria você prefere?");

    let filtro = carros.filter(carro => carro.categoria == categoria);

    console.table(filtro);
} else {
    console.log("Não tem problema, mostrarei todas as opções para você: ");

    console.table(carros);
}