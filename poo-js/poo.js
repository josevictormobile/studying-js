const objeto = {
    nome: "Nome do Objeto",
    id: 1
}

var variavel = 1;

function mostraObjetoGenerico(algo){
    console.log(algo);
}

function mostraObjetoExplicito({algo}){
    console.log(algo);
}


mostraObjetoGenerico(objeto);
mostraObjetoExplicito({algo:objeto});

mostraObjetoGenerico(variavel);
mostraObjetoExplicito({algo:variavel});




