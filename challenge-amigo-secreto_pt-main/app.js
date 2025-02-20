//versão 1 do amigo secreto

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, digite um nome e sobrenome válido');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Verifique o nome inserido. Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    let embaralhado = [...amigos];
    
    // Garante que ninguém sorteie a si mesmo
    do {
        embaralhar(embaralhado);
    } while (embaralhado.some((nome, index) => nome === amigos[index]));

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} → ${embaralhado[i]}`;
        li.classList.add('result-item');
        resultado.appendChild(li);
    }

    // Desabilita o botão após o sorteio
    document.querySelector('.button-draw').disabled = true;
}