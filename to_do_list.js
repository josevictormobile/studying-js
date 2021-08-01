const formulario = document.querySelector('.formulario');
const campo = document.getElementById('campo');
const lista = document.querySelector('.lista');

function adicionaItem(nome){
    let item = document.createElement('li');
    item.innerText = nome;
    lista.appendChild(item);
}

formulario.addEventListener('submit',function(e){
    e.preventDefault();//Evita que a página seja atualizada após o evento
    let nome = campo.value;
    if(nome === null || nome === "") return //Caso o campo esteja em branco não fazer nada
    campo.value=null;//Limpa o campo de formulário
    adicionaItem(nome);
})