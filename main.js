const form = document.getElementById('form-contato');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.some(contato => contato.nome === inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi inserido.`);
    } else { 
        contatos.push({ nome: inputNomeContato.value, numero: inputNumeroContato.value });
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos() {
    document.getElementById('numero-total-valor').innerText = contatos.length;
}