let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdicionar');
let main = document.getElementById('areaLista');

function addTarefa(){
    let valorInput = input.value;
     
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone"><i id="icone_${contador}" class="mdi mdi-circle-outline"></i></div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">${valorInput}</div>
        <div onclick="deletar(${contador})" class="item-botao"><button class="delete"><i class="mdi mdi-delete"></i>Deletar</button></div>
        </div>`;

        //Adicionar novo item no main
        main.innerHTML += novoItem;

        //zerar os campos
        input.value = "";
        input.focus();

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe=="item"){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
    }
}

input.addEventListener("keyup", function(event){
    //Apertou 13 (enter)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})